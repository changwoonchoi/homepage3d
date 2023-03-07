import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem, PubGridItemAnim } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbGCA from '../public/images/publications/gca.gif'

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={{sm:1}} gap={6}>
        <Section>
          <PubGridItemAnim
            id="GCA"
            title="Learning to Generate 3D shapes with Generative Cellular Automata"
            thumbnail={thumbGCA}
            journal="International Conference on Learning Representations (ICLR), 2021"
            author="Dongsu Zhang, Changwoon Choi, Jeonghwan Kim, Young Min Kim"
          >
            project page / paper / code
          </PubGridItemAnim>
        </Section>
        <Section>
          <PubGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </PubGridItem>
        </Section>
        <Section delay={0.2}>
          <PubGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </PubGridItem>
        </Section>
      </SimpleGrid>

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Publications 
export { getServerSideProps } from '../components/chakra'
