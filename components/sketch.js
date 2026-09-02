import { useEffect, useId, useRef, useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import {
  drawablyButton,
  drawablyUnderline,
  randomSeed,
  roughEllipse,
  variants
} from 'drawably'
import { DrawablyUnderline, DrawablyHighlight } from 'drawably/react'

// One pen for the whole site. drawably's defaults (roughness 1, boil 0.3) read
// as a gimmick next to publication lists, so the wobble is dialled down until it
// registers as paper texture rather than as a doodle.
export const PEN = { roughness: 0.6, boil: 0.15 }

export const SketchUnderline = props => <DrawablyUnderline {...PEN} {...props} />

export const SketchHighlight = props => <DrawablyHighlight {...PEN} {...props} />

// Section headings keep their Chakra sizing; only the CSS underline is traded
// for a drawn one (see the 'section-title' variant, which no longer decorates).
export const SketchHeading = ({ children, variant = 'section-title', ...rest }) => (
  <Heading as="h3" variant={variant} {...rest}>
    <SketchUnderline>{children}</SketchUnderline>
  </Heading>
)

// The vanilla attacher takes any element, so a link stays a plain <a> instead of
// the <a><button/></a> that drawably's React <DrawablyButton> would force.
export const SketchButton = ({
  as = 'button',
  leftIcon,
  rightIcon,
  children,
  variant = 'outline',
  strokeWidth,
  ...rest
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const sketch = drawablyButton(ref.current, {
      ...PEN,
      variant,
      ...(strokeWidth ? { width: strokeWidth } : {})
    })
    return () => sketch.destroy()
  }, [variant, strokeWidth])

  return (
    <Box
      as={as}
      ref={ref}
      type={as === 'button' ? 'button' : undefined}
      {...rest}
    >
      {leftIcon && (
        <Box as="span" display="inline-flex" mr={2} aria-hidden="true">
          {leftIcon}
        </Box>
      )}
      {children}
      {rightIcon && (
        <Box as="span" display="inline-flex" ml={2} aria-hidden="true">
          {rightIcon}
        </Box>
      )}
    </Box>
  )
}

// Draws the pen underline under any link on hover, and rubs it out again on
// leave. One delegated pair of listeners rather than a wrapper on ~40 links:
// nothing is drawn until a pointer actually arrives, and each hover re-sketches.
const skipUnderline = a =>
  a.classList.contains('drawably-button') ||
  // the site logo (an h1 link) and the mobile dropdown draw their own affordances
  a.closest('h1') ||
  a.closest('[role="menu"]') ||
  !a.textContent.trim()


export const SketchLinkUnderlines = () => {
  useEffect(() => {
    const sketches = new Map()
    // the anchor the pointer is currently inside, so a sketch lost to a React
    // re-render can be put straight back
    let hovered = null
    const redraws = new Map()

    const draw = a => {
      if (sketches.has(a) || skipUnderline(a)) return
      // stroke: currentColor makes the rule take the link's own colour
      const sketch = drawablyUnderline(a, { ...PEN, stroke: 'currentColor' })
      const svg = a.querySelector('svg.drawably-svg')

      // Padding has to reach the CSS on the anchor, not the svg: lineBoxes()
      // wipes svg.style.cssText on every repaint, so anything inline there is
      // lost the moment the ResizeObserver first fires.
      const cs = getComputedStyle(a)
      a.style.setProperty('--sketch-rule-padl', cs.paddingLeft)
      a.style.setProperty('--sketch-rule-padr', cs.paddingRight)
      a.style.setProperty('--sketch-rule-padb', cs.paddingBottom)

      // the viewBox is sized to the full padded box, so once the svg is
      // narrowed the default 'meet' would scale it down uniformly and move the
      // rule vertically. 'none' stretches instead: x compresses, y stays 1:1.
      // Attributes survive paint(), so this only needs setting once.
      svg?.setAttribute('preserveAspectRatio', 'none')

      // drawably only sets pathLength on layers that ask for it, and the
      // underline layer does not. Normalising it to 1 lets one CSS keyframe
      // draw every rule at the same rate, whatever the link's width.
      // It has to be re-stamped on every repaint: attachChrome's
      // ResizeObserver fires once right after observe() and paint() rebuilds
      // the paths from scratch, which would drop the attribute.
      const stamp = () =>
        svg
          ?.querySelectorAll('path:not([pathLength])')
          .forEach(p => p.setAttribute('pathLength', '1'))
      stamp()
      const repaints = new MutationObserver(stamp)
      if (svg) repaints.observe(svg, { childList: true })

      // Chakra re-renders a link when its props change — the navbar's active
      // item on every route change — and React writes className wholesale,
      // dropping the classes drawably added. The svg is left behind without
      // .drawably-host's position:relative, so it re-anchors to the fixed
      // navbar and stripes a rule across the whole header. Treat a stripped
      // class as "this sketch is void": bin it, and redraw if still hovered.
      const classGuard = new MutationObserver(() => {
        if (a.classList.contains('drawably-host')) return
        erase(a)
        const n = redraws.get(a) || 0
        if (hovered === a && n < 3) {
          redraws.set(a, n + 1)
          draw(a)
        }
      })
      classGuard.observe(a, { attributes: true, attributeFilter: ['class'] })

      sketches.set(a, {
        destroy: () => {
          repaints.disconnect()
          classGuard.disconnect()
          sketch.destroy()
          ;['padl', 'padr', 'padb'].forEach(k =>
            a.style.removeProperty(`--sketch-rule-${k}`)
          )
        }
      })
    }
    const erase = a => {
      const sketch = sketches.get(a)
      if (!sketch) return
      sketch.destroy()
      sketches.delete(a)
    }

    const onOver = e => {
      const a = e.target.closest?.('a')
      if (!a) return
      hovered = a
      draw(a)
    }
    const onOut = e => {
      const a = e.target.closest?.('a')
      // pointerout also fires moving between an anchor's own children
      if (!a || a.contains(e.relatedTarget)) return
      if (hovered === a) hovered = null
      redraws.delete(a)
      erase(a)
    }

    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)
    return () => {
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
      sketches.forEach(sketch => sketch.destroy())
    }
  }, [])

  return null
}

// A portrait cut out along a hand-drawn line: the same rough ellipse serves as
// the clip path and as the visible stroke, so the ink sits exactly on the cut.
// The first render uses a fixed seed so server and client agree; the effect then
// swaps in a fresh sketch, which is why there is no hydration guard here.
const PHOTO_SEED = 20200901
const PHOTO_INSET = 3
// how far the picture sits inside the drawn edge; the ring between the two is
// filled with the mat colour so the photo reads as mounted rather than cut out
const PHOTO_MAT = 3

export const SketchPhoto = ({ children, size = 150 }) => {
  const [seed, setSeed] = useState(PHOTO_SEED)
  const clipId = `sketch-photo-${useId().replace(/:/g, '')}`

  useEffect(() => setSeed(randomSeed()), [])

  const c = size / 2
  const r = c - PHOTO_INSET
  const roughOpts = { seed, roughness: PEN.roughness, boil: PEN.boil }
  const frames = variants(o => roughEllipse(c, c, r, r, o), roughOpts)
  // same seed, smaller radius: the cut follows the drawn edge inwards
  const inner = roughEllipse(c, c, r - PHOTO_MAT, r - PHOTO_MAT, {
    ...roughOpts,
    boil: 0
  })

  return (
    <Box
      className="sketch-photo"
      position="relative"
      w={`${size}px`}
      h={`${size}px`}
      display="inline-block"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path d={inner} />
          </clipPath>
        </defs>
        <path d={frames[0]} fill="var(--sketch-photo-mat)" stroke="none" />
        {frames.map((d, i) => (
          <path
            key={i}
            className="drawably-boil"
            data-i={i}
            d={d}
            fill="none"
            stroke="var(--drawably-stroke)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <Box
        position="absolute"
        inset="0"
        sx={{ clipPath: `url(#${clipId})` }}
      >
        {children}
      </Box>
    </Box>
  )
}
