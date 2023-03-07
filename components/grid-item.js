import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react'
import { Global } from '@emotion/react'

var make_link = function (url, text, slash) {
  var none="none"
  if (none.localeCompare(url) == 0) {
    return ''
  }
  if (slash) {
    // return <><Link as={NextLink} href={url} target="_blank">{text}</Link> / </>
    return <Text fontSize={14} display="inline"><nobr>{' '}<Link as={NextLink} href={url} target="_blank">{text}</Link> / </nobr></Text>
  }
  else {
    // return <Link as={NextLink} href={url} target="_blank">{text}</Link>
    return <Text fontSize={14} display="inline">{' '}<Link as={NextLink} href={url} target="_blank">{text}</Link></Text>
  }
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

export const PubGridItem = ({ title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
    <Box w={{sm:"100%", md: "100%"}} textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
      />
    </Box>
    <Box w={{sm: "100%", md: "300%"}} textAlign="left">
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>
        {author}
      </Text>
      <Text fontSize={14} color="grey" fontStyle="italic">
        {journal}
      </Text>
      {make_link (`${project_page}`, "project page", true)}
      {make_link (`${paper}`, "paper", true)} 
      {make_link (`${video}`, "video", true)} 
      {make_link (`${code}`, "code", false) }
    </Box>
  </SimpleGrid>
)

export const PubGridItemLink = ({ id, title, thumbnail, journal, author, project_page, paper, video, code }) => (
  <SimpleGrid columns={{sm: 1, md: 4}} gap={4}>
    <Box w={{sm:"100%", md: "100%"}} textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
      />
    </Box>
    <Box w={{sm: "100%", md: "300%"}} textAlign="left">
      <Text mt={2} fontSize={20}>
        {' '}
        <Link as={NextLink} href={`/publications/${id}`} variants="pub_title">
          {title}
        </Link>
      </Text>
      <Text fontSize={14}>
        {author}
      </Text>
      <Text fontSize={14} color="grey" fontStyle="italic">
        {journal}
      </Text>
      {make_link (`${project_page}`, "project page", true)}
      {make_link (`${paper}`, "paper", true)} 
      {make_link (`${video}`, "video", true)} 
      {make_link (`${code}`, "code", false) }
    </Box>
  </SimpleGrid>
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
