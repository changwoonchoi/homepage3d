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
    <Layout title="EgoNeRF">
      <Container>
        <Title>
          Balanced Spherical Grid for Egocentric View Synthesis <Badge>CVPR 2023</Badge>
        </Title>
        <Text textAlign="right" fontStyle="italic">
          - Changwoon Choi, Sang Min Kim, Young Min Kim
        </Text>
        <WorkImage src="/images/publications/egonerf_teaser.png" alt="EgoNeRF_teaser" />
        <Heading as="h3" variant="section-title">
          Abstract
        </Heading>
        <P>
          We present EgoNeRF, a practical solution to reconstruct large-scale real-world environments for VR assets.
          Given a few seconds of casually captured 360 video, EgoNeRF can efficiently build neural radiance fields.
          Motivated by the recent acceleration of NeRF using feature grids, we adopt spherical coordinate instead of conventional Cartesian coordinate.
          Cartesian feature grid is inefficient to represent large-scale unbounded scenes because it has a spatially uniform resolution, regardless of distance from viewers.
          The spherical parameterization better aligns with the rays of egocentric images, and yet enables factorization for performance enhancement.
          However, the naïve spherical grid suffers from singularities at two poles, and also cannot represent unbounded scenes.
          To avoid singularities near poles, we combine two balanced grids, which results in a quasi-uniform angular grid.
          We also partition the radial grid exponentially and place an environment map at infinity to represent unbounded scenes. 
          Furthermore, with our resampling technique for grid-based methods, we can increase the number of valid samples to train NeRF volume.
          We extensively evaluate our method in our newly introduced synthetic and real-world egocentric 360 video datasets, and it consistently achieves state-of-the-art performance.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>NeRF, Egocentric video, Large scale</span>
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
            @inproceedings&#123;choi2023CVPR,<br/>  author  =Changwoon Choi and Sang Min Kim and Young Min Kim&#125;,<br/>  title   =Balanced Spherical Grid for Egocentric View Synthesis,<br/>  booktitle =Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)<br/>  month   =June,<br/>  year    =2023,<br/>  pages   =TBD,<br/>&#125; 
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
  