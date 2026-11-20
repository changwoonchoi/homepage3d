import NextLink from 'next/link'
import { Container, Heading, Box, Divider, Text } from '@chakra-ui/react'
import { SketchButton } from '../components/sketch'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Divider my={6} />
      <Text textAlign="center">No posts yet!</Text>
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

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
