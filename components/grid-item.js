import { useState, useRef, useEffect } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkBox, LinkOverlay, Grid, Skeleton } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { SketchButton } from './sketch'

// Only fetches the (often large, animated) thumbnail once it scrolls near the
// viewport. A skeleton placeholder reserves the image's aspect ratio so there
// is no layout shift when the real image swaps in.
export const LazyThumbnail = ({ thumbnail, title }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const aspectRatio =
    thumbnail?.width && thumbnail?.height
      ? `${thumbnail.width} / ${thumbnail.height}`
      : '1 / 1'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box ref={ref} position="relative" w="100%" sx={{ aspectRatio }}>
      {!loaded && (
        <Skeleton
          position="absolute"
          inset="0"
          w="100%"
          h="100%"
          borderRadius="12px"
        />
      )}
      {inView && (
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          onLoadingComplete={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </Box>
  )
}



export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/publications/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

// export const PubGridItem = ({ children, id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
//   <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
//     <Box w={{sm:"100%", md: "100%"}} textAlign="center">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/${id}`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <Image
//           src={thumbnail}
//           alt={title}
//           className="grid-item-thumbnail"
//         />
//       </LinkBox>
//     </Box>
//     <Box w={{sm: "100%", md: "300%"}} textAlign="left">
//       <LinkBox
//         as={NextLink}
//         href={`/publications/GCA`}
//         scroll={false}
//         cursor="pointer"
//       >
//         <LinkOverlay as="div" href={`/publications/${id}`}>
//           <Text mt={2} fontSize={20}>
//             {title}
//           </Text>
//           <Text fontSize={14}>
//             {author}
//           </Text>
//           <Text fontSize={14} color="grey" fontStyle="italic">
//             {journal}
//           </Text>
//         </LinkOverlay>
//         {make_link (`${project_page}`, "project page", true)}
//         {make_link (`${paper}`, "paper", true)} 
//         {make_link (`${video}`, "video", true)} 
//         {make_link (`${code}`, "code", false) }
//       </LinkBox>
//     </Box>
//   </SimpleGrid>
// )

// The four resource links, as small sketch buttons. Anchors, not <button>s, so
// a publication's links stay real links.
const PubLinks = ({ project_page, paper, video, code }) => (
  <Box mt={3} display="flex" flexWrap="wrap" gap={2}>
    {[
      { url: project_page, text: 'project page' },
      { url: paper, text: 'paper' },
      { url: video, text: 'video' },
      { url: code, text: 'code' }
    ]
      .filter(link => link.url && link.url !== 'none')
      .map(link => (
        <SketchButton
          key={link.text}
          as="a"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          fontSize={13}
          px={3}
          py={1}
        >
          {link.text}
        </SketchButton>
      ))}
  </Box>
)

export const PubGridItem = ({ title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <Grid templateColumns={{ sm: '1fr', md: '200px 1fr' }} gap={6} alignItems="center">
    <Box w="100%" textAlign="center">
      <LazyThumbnail thumbnail={thumbnail} title={title} />
    </Box>
    <Box w="100%" textAlign="left">
      <Text as="div" mt={2} fontSize={20}>
        {title}
      </Text>
      <Text as="div" fontSize={14}>
        {author}
      </Text>
      <Text fontSize={14} color="grey" fontStyle="italic" whiteSpace="pre-line">
        {journal}
      </Text>
      <PubLinks
        project_page={project_page}
        paper={paper}
        video={video}
        code={code}
      />
    </Box>
  </Grid>
)

export const PubGridItemLink = ({ id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <Grid templateColumns={{ sm: '1fr', md: '200px 1fr' }} gap={6} alignItems="center">
    <Box w="100%" textAlign="center">
      <LazyThumbnail thumbnail={thumbnail} title={title} />
    </Box>
    <Box w="100%" textAlign="left">
      <Text as="div" mt={2} fontSize={20}>
        {' '}
        <Link as={NextLink} href={`/publications/${id}`} variants="pub_title">
          {title}
        </Link>
      </Text>
      <Text as="div" fontSize={14}>
        {author}
      </Text>
      <Text fontSize={14} color="grey" fontStyle="italic" whiteSpace="pre-line">
        {journal}
      </Text>
      <PubLinks
        project_page={project_page}
        paper={paper}
        video={video}
        code={code}
      />
    </Box>
  </Grid>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
