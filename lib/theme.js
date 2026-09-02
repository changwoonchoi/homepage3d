import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
      // drawably reads its ink from these, so the sketches follow the colour
      // mode without having to re-mount when it flips
      '--drawably-stroke': mode('#5b544c', '#c8c2b8')(props),
      // marker wash only; picks up the theme's teal so it reads as deliberate
      // rather than as a grey selection band
      '--drawably-fill': mode('#1f9d94', '#4f8f8a')(props),
      '--drawably-paper': mode('#f0e7db', '#202023')(props),
      // primary-action ink. Dark enough to clear 4.5:1 on both canvases
      // (5.2:1 on cream, 8.3:1 on the dark ground)
      '--drawably-accent': mode('#146b66', '#7fc6c0')(props)
    },
    // drawably hard-codes Inter. Decorations should inherit the surrounding
    // copy; buttons get the pen, since every label on this site is ASCII and
    // so stays inside the pen font's 83 glyphs.
    '.drawably-host': {
      fontFamily: 'inherit'
    },
    '.drawably-button': {
      fontFamily: "'Drawably Pen', 'M PLUS Rounded 1c', sans-serif"
    },
    // the marker wash multiplies, which is invisible on the dark canvas
    '.drawably-highlight .drawably-wash': {
      mixBlendMode: mode('multiply', 'screen')(props)
    },
    // the navbar's backdrop-filter gives the blend a near-white backdrop rather
    // than the page, so the same wash lands much paler there. The active tab
    // has to read as active, so give it more ink.
    'nav .drawably-highlight .drawably-wash': {
      strokeOpacity: 0.55
    },
    // the photo outline is drawn by components/sketch.js rather than by an
    // attacher, so it opts into drawably's boil cycle by hand
    '.sketch-photo svg': {
      animation: 'drawably-boil 1200ms step-end infinite'
    },
    // the paper mat between the photo and its drawn edge
    '.sketch-photo': {
      '--sketch-photo-mat': mode('#fffdf8', '#35353b')(props)
    },
    // drawably measures the rule off the bottom of the element's box, a whole
    // line-box below the baseline — and further still on a padded link like the
    // navbar's, where it would also run wider than the word. SketchLinkUnderlines
    // publishes each link's padding as these variables; the constant is in em so
    // it tracks the font size.
    'a.drawably-underline > svg.drawably-svg': {
      left: 'var(--sketch-rule-padl, 0px)',
      // width must be explicit: on an <svg>, `auto` resolves to the intrinsic
      // 100% rather than being derived from left/right, which left the rule at
      // full width and simply shifted 8px to the right on padded links
      right: 'auto',
      width:
        'calc(100% - var(--sketch-rule-padl, 0px) - var(--sketch-rule-padr, 0px))',
      transform: 'translateY(calc(-0.28em - var(--sketch-rule-padb, 0px)))'
    },
    // draw it on rather than flashing it in. pathLength is normalised to 1 at
    // attach, so this one duration fits every link width.
    'a.drawably-underline > svg.drawably-svg path': {
      strokeDasharray: 1,
      strokeDashoffset: 1,
      animation: 'sketch-draw 340ms cubic-bezier(0.25, 0.6, 0.3, 1) forwards'
    },
    // each rule is a double stroke, so the path holds two subpaths of ~half the
    // normalised length and dashing restarts on each. The line is therefore
    // complete at offset 0.5, not 0 — stopping just past it keeps the whole
    // duration as visible drawing instead of spending half of it already done.
    '@keyframes sketch-draw': {
      to: { strokeDashoffset: 0.45 }
    },
    '@media (prefers-reduced-motion: reduce)': {
      '.sketch-photo svg': { animation: 'none' },
      'a.drawably-underline > svg.drawably-svg path': {
        animation: 'none',
        strokeDasharray: 'none',
        strokeDashoffset: 0
      }
    }
  })
}

const components = {
  Heading: {
    variants: {
      // no textDecoration on the two section variants: SketchUnderline draws
      // the rule instead (components/sketch.js)
      'section-title': {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        marginBottom: 5
      },
      'section-subtitle': {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3
      },
      'hidden-component': {
        fontSize: 1
      }
    }
  },
  Link: {
    // fountain-pen blue-black rather than the old royal blue / hot pink, which
    // both sat outside the paper-and-ink palette. Deliberately not teal: that
    // belongs to the marker wash, and links should not read as highlighted.
    baseStyle: props => ({
      color: mode('#2b5f7e', '#9dc4d9')(props),
      textUnderlineOffset: 3,
      // SketchLinkUnderlines draws the hover rule; the CSS one would double it
      _hover: { textDecoration: 'none' }
    }),
  },
  Container: {
    baseStyle: {
      maxW: 'container.lg'
    }
  }
}

const fonts = {
  // Drawably Pen only ships 83 ASCII glyphs, so it leads the stack and every
  // accented character falls through to M PLUS Rounded. Safe for headings
  // (all ASCII); never set it on body copy, where 'Clement' would split
  // mid-word across two typefaces.
  heading: "'Drawably Pen', 'M PLUS Rounded 1c', sans-serif",
  body: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
}

const colors = {
  grassTeal: '#88ccca',
  // the ink the sketches are drawn in, exposed for components that need to
  // match it in JS
  ink: { light: '#5b544c', dark: '#c8c2b8' }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}



const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
