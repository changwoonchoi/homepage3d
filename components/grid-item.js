import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react'
import { Global } from '@emotion/react'

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

export const PubGridItem = ({ children, id, title, thumbnail }) => (
  <SimpleGrid columns={{sm: 1, md: 3}} gap={4}>
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
      </LinkBox>
    </Box>
    <Box w={{sm: "100%", md: "200%"}} textAlign="left">
      <LinkOverlay as="div" href={`/publications/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </Box>
  </SimpleGrid>
)

export const PubGridItemAnim = ({ children, id, title, thumbnail, journal, author }) => (
  <SimpleGrid columns={{sm: 1, md: 3}} gap={4}>
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
          // placeholder="blur"
        />
      </LinkBox>
    </Box>
    <Box w={{sm: "100%", md: "200%"}} textAlign="left">
      <LinkOverlay as="div" href={`/publications/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
        <Text fontSize={14}>
          {author}
        </Text>
        <Text fontSize={14} color="grey" fontStyle="italic">
          {journal}
        </Text>
      <Text fontSize={14}>{children}</Text>
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
