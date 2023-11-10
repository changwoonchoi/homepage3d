import {
    Container,
    Heading,
    Badge,
    Link,
    List,
    ListItem,
    Box,
    Text,
    SimpleGrid
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  // import P from '../../components/paragraph'
  import 'katex/dist/katex.min.css'
  import Latex from 'react-latex-next'

  const Publication = () => (

    <Layout title="IBL-NeRF">
      <Container>
        <Title>
          IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields <Badge>PG 2023</Badge>
        </Title>

        <SimpleGrid columns={3} gap={6}>
          <Box w="100%" textAlign="center">
            <Link href="https://changwoon.info" target="_blank">
              <Text fontSize="14" fontWeight="800">Changwoon Choi<sup>*</sup></Text>
            </Link>
          </Box>
          <Box w="100%" textAlign="center">
            <Link href="https://juhyeonkim.netlify.app/" target="_blank">
              <Text fontSize="14" fontWeight="800">Juhyeon Kim<sup>*</sup></Text>
            </Link>
          </Box>
          <Box w="100%" textAlign="center">
            <Link href="https://3d.snu.ac.kr/" target="_blank">
              <Text fontSize="14" fontWeight="800">Young Min Kim</Text>
            </Link>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={3} gap={6}>
          <Box w="100%" textAlign="center">
            <Text fontSize="12">Seoul National University</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <Text fontSize="12">Dartmouth College</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <Text fontSize="12">Seoul National University</Text>
          </Box>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Abstract
        </Heading>
        <WorkImage src="/images/publications/ibl-nerf_teaser.jpg" alt="IBL-NeRF_teaser" />
        <Latex>
          We propose IBL-NeRF, which decomposes the neural radiance fields (NeRF) of large-scale indoor scenes into intrinsic components. Previous approaches for the inverse rendering of NeRF transform the implicit volume to fit the rendering pipeline of explicit geometry, and approximate the views of segmented, isolated objects with environment lighting. In contrast, our inverse rendering extends the original NeRF formulation to capture the spatial variation of lighting within the scene volume, in addition to surface properties. Specifically, the scenes of diverse materials are decomposed into intrinsic components for image-based rendering, namely, albedo, roughness, surface normal, irradiance, and prefiltered radiance. All of the components are inferred as neural images from MLP, which can model large-scale general scenes. By adopting the image-based formulation of NeRF, our approach inherits superior visual quality and multi-view consistency for synthesized images. We demonstrate the performance on scenes with complex object layouts and light configurations, which could not be processed in any of the previous works.
        </Latex>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>NeRF, Intrinsic decomposition, Scene editing</span>
          </ListItem>
          <ListItem>
            <Meta>Paper</Meta>
            <Link href="https://doi.org/10.1111/cgf.14929" target="_blank">
              PDF Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Dataset</Meta>
            <Link href="https://drive.google.com/drive/folders/1hNcZBgHAM0SBiULJiiS1V8NGdLe4xt7j?usp=share_link" target="_blank">
              Google Drive Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/changwoonchoi/IBL-NeRF" target="_blank">
              GitHub Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>


        <Heading as="h3" variant="section-title">
          Citation
        </Heading>
        <Box bg="rgba(0.9, 0.9, 0.9, 0.1)" borderRadius="lg" padding={3} overflowX="scroll">
          <Text fontSize={12}>
            <pre>
            @article&#123;choi2022ibl,<br/>  title=&#123;IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields&#125;,<br/>  author=&#123;Choi, Changwoon and Kim, Juhyeon and Kim, Young Min&#125;,<br/>  journal=&#123;arXiv preprint arXiv:2210.08202&#125;,<br/>  year=&#123;2022&#125;<br/>&#125;
            </pre>
          </Text>
        </Box>

      <Box align="center" h="3em">
      </Box>
      </Container>
    </Layout>
  )

  export default Publication
  export { getServerSideProps } from '../../components/chakra'

