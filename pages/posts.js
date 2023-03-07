import NextLink from 'next/link'
import { Container, Heading, Box, Divider, Button, Text } from '@chakra-ui/react'
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
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
