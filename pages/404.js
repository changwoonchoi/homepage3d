import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider
} from '@chakra-ui/react'
import { SketchButton } from '../components/sketch'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <SketchButton
          as={NextLink}
          href="/"
          scroll={false}
          strokeWidth={2.2}
          fontSize={19}
          px={6}
          py={2}
          sx={{ '--drawably-ink': 'var(--drawably-accent)' }}
        >
          Return to home
        </SketchButton>
      </Box>
    </Container>
  )
}

export default NotFound
