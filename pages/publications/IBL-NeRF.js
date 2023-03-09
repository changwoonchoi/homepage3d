import {
    Container,
    Heading,
    Badge,
    Link,
    List,
    ListItem,
    Box,
    Text
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Publication = () => (
    <Layout title="IBL-NeRF">
      <Container>
        <Title>
          IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields <Badge>arXiv 2022</Badge>
        </Title>
        <Text textAlign="right" fontStyle="italic">
          - Changwoon Choi, Juhyeon Kim, Young Min Kim
        </Text>
        <WorkImage src="/images/publications/ibl-nerf_teaser.jpg" alt="IBL-NeRF_teaser" />
        <Heading as="h3" variant="section-title">
          Abstract
        </Heading>
        <P>
          We propose IBL-NeRF, which decomposes the neural radiance fields (NeRF) of large-scale indoor scenes into intrinsic components. Previous approaches for the inverse rendering of NeRF transform the implicit volume to fit the rendering pipeline of explicit geometry, and approximate the views of segmented, isolated objects with environment lighting. In contrast, our inverse rendering extends the original NeRF formulation to capture the spatial variation of lighting within the scene volume, in addition to surface properties. Specifically, the scenes of diverse materials are decomposed into intrinsic components for image-based rendering, namely, albedo, roughness, surface normal, irradiance, and prefiltered radiance. All of the components are inferred as neural images from MLP, which can model large-scale general scenes. By adopting the image-based formulation of NeRF, our approach inherits superior visual quality and multi-view consistency for synthesized images. We demonstrate the performance on scenes with complex object layouts and light configurations, which could not be processed in any of the previous works.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>NeRF, Intrinsic decompositioin, Scene editing</span>
          </ListItem>
          <ListItem>
            <Meta>Paper</Meta>
            <Link>
              PDF Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Dataset</Meta>
            <Link>
              Google Drive Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link>
              GitHub Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link>
              Video Link{' '}
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
            @article&#123;choi2022ibl,<br/>  author  =Choi, Changwoon and Kim, Juhyeon and Kim, Young Min&#125;,<br/>  title   =IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields,<br/>  journal =arXiv preprint arXiv:2210.08202<br/>  month   =June,<br/>  year    =2022,<br/>&#125; 
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
  