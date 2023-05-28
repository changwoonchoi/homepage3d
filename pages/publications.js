import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem, PubGridItemLink } from '../components/grid-item'

import thumbGCA from '../public/images/publications/gca.gif'
import thumbcGCA from '../public/images/publications/cgca.gif'
import thumbPICCOLO from '../public/images/publications/piccolo.jpg'
import thumbCPO from '../public/images/publications/cpo.jpg'
import thumbIBLNeRF from '../public/images/publications/ibl-nerf.png'
import thumbEgoNeRF from '../public/images/publications/egonerf_high.gif'

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={{sm:1}} gap={6}>
        <Section>
          <PubGridItemLink
            id="EgoNeRF"
            title="Balanced Spherical Grid for Egocentric View Synthesis"
            thumbnail={thumbEgoNeRF}
            journal="IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2023"
            author="Changwoon Choi, Sang Min Kim, Young Min Kim"
            project_page="none"
            paper="https://arxiv.org/abs/2303.12408"
            video="https://www.youtube.com/watch?v=D-lsBhVP8zw"
            code="https://github.com/changwoonchoi/EgoNeRF"
          >
          </PubGridItemLink>
        </Section>

        <Section>
          <PubGridItemLink
            id="IBL-NeRF"
            title="IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields"
            thumbnail={thumbIBLNeRF}
            journal="arXiv preprint"
            author="Changwoon Choi, Juhyeon Kim, Young Min Kim"
            project_page="none"
            paper="https://arxiv.org/abs/2210.08202"
            video="none"
            code="https://github.com/changwoonchoi/IBL-NeRF"
          >
          </PubGridItemLink>
        </Section>

        <Section>
          <PubGridItem
            // id="CPO"
            title="CPO: Change Robust Panorama to Point Cloud Localization"
            thumbnail={thumbCPO}
            journal="European Conference on Computer Vision (ECCV), 2022"
            author="Junho Kim, Hojun Jang, Changwoon Choi, Young Min Kim"
            project_page="none"
            paper="https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136690173.pdf"
            video="https://www.youtube.com/watch?v=V6XjHL5q0_Y&feature=youtu.be"
            code="https://github.com/82magnolia/cpo"
          >
            Constructing score maps in 2D, 3D that reflect regional color consistencies enable robust localization amidst scene changes.
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            // id="cGCA"
            title="Probabilistic Implicit Scene Completion"
            thumbnail={thumbcGCA}
            journal="International Conference on Learning Representations (ICLR), 2022"
            author="Junho Kim, Changwoon Choi, Hojun Jang, Young Min Kim"
            project_page="none"
            paper="https://openreview.net/forum?id=BnQhMqDfcKG"
            video="none"
            code="https://github.com/96lives/gca"
          >
            We tackle the problem of probabilistic scene completion for the first time by extending the Generative Cellular Automata to produce continuous 3D surface.
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            // id="PICCOLO"
            title="PICCOLO: Point Cloud-Centric Omnidirectional Localization"
            thumbnail={thumbPICCOLO}
            journal="International Conference on Computer Vision (ICCV), 2021"
            author="Junho Kim, Changwoon Choi, Hojun Jang, Young Min Kim"
            project_page="none"
            paper="https://openaccess.thecvf.com/content/ICCV2021/html/Kim_PICCOLO_Point_Cloud-Centric_Omnidirectional_Localization_ICCV_2021_paper.html"
            video="https://www.youtube.com/watch?v=E-_lEsChfoE"
            code="https://github.com/82magnolia/piccolo"
          >
            By minimizing a novel loss function that penalizes color discrepancies in 2D and 3D, effective localization can be performed using panorama images without learning.
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            id="GCA"
            title="Learning to Generate 3D shapes with Generative Cellular Automata"
            thumbnail={thumbGCA}
            journal="International Conference on Learning Representations (ICLR), 2021"
            author="Dongsu Zhang, Changwoon Choi, Jeonghwan Kim, Young Min Kim"
            project_page="none"
            paper="https://openreview.net/forum?id=rABUmU3ulQh"
            video="none"
            code="https://github.com/96lives/gca"
          >
            We present a Markov chain based 3D generative model named Generative Cellular Automata, which is scalable for producing high-resolution voxels.
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
