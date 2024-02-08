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
import thumbLDL from '../public/images/publications/ldl_1.gif'
import thumbCTM from '../public/images/publications/ctm_lowres.gif'
import thumb3Doodle from '../public/images/publications/soon.png'
// import placeholder from '../public/images/publications/soon.png'

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={{sm:1}} gap={6}>
        <Section>
          <PubGridItem
            title="3Doodle: Compact Abstraction of Objects with 3D Strokes"
            thumbnail={thumb3Doodle}
            journal="arXiv, 2024"
            author="Changwoon Choi, Jaeah Lee, Jaesik Park, Young Min Kim"
            project_page="none"
            paper="https://arxiv.org/abs/2402.03690"
            video="none"
            code="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItemLink
            id="IBL-NeRF"
            title="IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields"
            thumbnail={thumbIBLNeRF}
            journal="Computer Graphics Forum (Proceedings of Pacific Graphics), 2023"
            author="Changwoon Choi*, Juhyeon Kim*, Young Min Kim"
            project_page="none"
            paper="https://doi.org/10.1111/cgf.14929"
            video="none"
            code="https://github.com/changwoonchoi/IBL-NeRF"
          >
          </PubGridItemLink>
        </Section>

        <Section>
          <PubGridItem
            title="Robust Novel View Synthesis with Color Transform Module"
            thumbnail={thumbCTM}
            journal="Computer Graphics Forum (Proceedings of Pacific Graphics), 2023"
            author="Sang Min Kim, Changwoon Choi, Hyeongjun Heo, Young Min Kim"
            project_page="none"
            paper="https://3d.snu.ac.kr/papers/ColorTransformNeRF.pdf"
            video="none"
            code="https://github.com/sangminkim-99/ColorTransformModule"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItem
            title="LDL: Line Distance Functions for Panoramic Localization"
            thumbnail={thumbLDL}
            journal="International Conference on Computer Vision (ICCV), 2023"
            author="Junho Kim, Changwoon Choi, Hojun Jang, Young Min Kim"
            project_page="none"
            paper="https://arxiv.org/pdf/2308.13989.pdf"
            video="none"
            code="https://github.com/82magnolia/panoramic-localization"
          >
          </PubGridItem>
        </Section>

        <Section>
          <PubGridItemLink
            id="EgoNeRF"
            title="Balanced Spherical Grid for Egocentric View Synthesis"
            thumbnail={thumbEgoNeRF}
            journal="IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2023"
            author="Changwoon Choi, Sang Min Kim, Young Min Kim"
            project_page="none"
            paper="https://openaccess.thecvf.com/content/CVPR2023/html/Choi_Balanced_Spherical_Grid_for_Egocentric_View_Synthesis_CVPR_2023_paper.html"
            video="https://www.youtube.com/watch?v=D-lsBhVP8zw"
            code="https://github.com/changwoonchoi/EgoNeRF"
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
            author="Dongsu Zhang, Changwoon Choi, Inbum Park, Young Min Kim"
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
