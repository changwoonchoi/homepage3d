import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem, PubGridItemLink } from '../components/grid-item'

import thumbGCA from '../public/images/publications/gca.gif'
import thumbcGCA from '../public/images/publications/cgca.gif'
import thumbPICCOLO from '../public/images/publications/piccolo.jpg'
import thumbCPO from '../public/images/publications/cpo.jpg'
// import thumbIBLNeRF from '../public/images/publications/ibl-nerf.png'
import thumbIBLNeRF from '../public/images/publications/IBL-NeRF.gif'
import thumbEgoNeRF from '../public/images/publications/egonerf_high.gif'
import thumbLDL from '../public/images/publications/ldl_1.gif'
import thumbCTM from '../public/images/publications/ctm_lowres.gif'
import thumbmaterialGCA from '../public/images/publications/material_gca.jpg'
import thumb3Doodle from '../public/images/publications/3doodle.gif'
import thumbI2SLAM from '../public/images/publications/i2slam.gif'
import thumbLiv3Stroke from '../public/images/publications/liv3stroke_cropped.gif'
// import placeholder from '../public/images/publications/soon.png'
import thumbHCP from '../public/images/publications/hcp_compressed.gif'
import thumbProbeOptim from '../public/images/publications/probe_optim.gif'

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={{sm:1}} gap={6}>
        <Section>
          <PubGridItem
            id="probe_optim"
            title="Geometry-Aware Scene Configurations for Novel View Synthesis"
            thumbnail={thumbProbeOptim}
            journal="IEEE Conference on Virtual Reality and 3D User Interfaces (VR) Posters, 2026"
            project_page="none"
            author=<p>Minkwan Kim, <b>Changwoon Choi</b>, Young Min Kim</p>
            paper="none"
            video="none"
            code="none"
            slides="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            id="HCP"
            title="Humans as a Calibration Pattern: Dynamic 3D Scene Reconstruction from Unsynchronized and Uncalibrated Videos"
            thumbnail={thumbHCP}
            journal="International Conference on Computer Vision (ICCV), 2025"
            project_page="https://changwoonchoi.github.io/HCP"
            author=<p><b>Changwoon Choi</b>, Jeongjun Kim, Geonho Cha, Minkwan Kim, Dongyoon Wee, Young Min Kim</p>
            paper="https://arxiv.org/abs/2412.19089"
            video="none"
            code="https://github.com/changwoonchoi/HCP"
            slides="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            id="Liv3Stroke"
            title="Recovering Dynamic 3D Sketches from Videos"
            thumbnail={thumbLiv3Stroke}
            journal="IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025"
            project_page="https://jaeah.me/liv3stroke_web/"
            author=<p>Jaeah Lee, <b>Changwoon Choi</b>, Young Min Kim, Jaesik Park</p>
            paper="https://openaccess.thecvf.com/content/CVPR2025/html/Lee_Recovering_Dynamic_3D_Sketches_from_Videos_CVPR_2025_paper.html"
            video="https://youtu.be/kN9fyoDaMTI?si=tvfAycFv1CLLUbtz"
            code="https://github.com/hayanz/Liv3Stroke"
            slides="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            id="I2SLAM"
            title=<p><i>I<sup>2</sup></i>-SLAM: Inverting Imaging Process for Robust Photorealistic Dense SLAM</p>
            thumbnail={thumbI2SLAM}
            journal="European Conference Computer Vision (ECCV), 2024"
            project_page="https://changwoonchoi.github.io/i2slam/"
            author=<p>Gwangtak Bae*, <b>Changwoon Choi*</b>, Hyeongjun Heo, Sang Min Kim, Young Min Kim<br/><i>(*Equally contributed)</i></p>
            paper="https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03857.pdf"
            video="https://www.youtube.com/watch?v=R4C-ZkVae00"
            code="none"
            slides="none"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            id="3Doodle"
            title="3Doodle: Compact Abstraction of Objects with 3D Strokes"
            thumbnail={thumb3Doodle}
            journal="SIGGRAPH (ACM Transactions on Graphics), 2024"
            author=<p><b>Changwoon Choi</b>, Jaeah Lee, Jaesik Park, Young Min Kim</p>
            project_page="https://changwoonchoi.github.io/3Doodle/"
            paper="https://dl.acm.org/doi/10.1145/3658156"
            video="none"
            code="https://github.com/changwoonchoi/3Doodle"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItem
            title="Investigating Chiral Morphogenesis of Gold Using Generative Cellular Automata"
            thumbnail={thumbmaterialGCA}
            journal="Nature Materials, 2024"
            author=<p>Sang Won Im*, Dongsu Zhang*, Jeong Hyun Han, Ryeong Myeong Kim, <b>Changwoon Choi</b>, Young Min Kim**, Ki Tae Nam**</p>
            project_page="none"
            paper="https://www.nature.com/articles/s41563-024-01889-x"
            video="none"
            code="https://github.com/sangwonim/gca-chiral-morphogenesis"
          >
          </PubGridItem>
        </Section>
        <Section>
          <PubGridItemLink
            id="IBL-NeRF"
            title="IBL-NeRF: Image-Based Lighting Formulation of Neural Radiance Fields"
            thumbnail={thumbIBLNeRF}
            journal="Computer Graphics Forum (Proceedings of Pacific Graphics), 2023"
            author=<p><b>Changwoon Choi*</b>, Juhyeon Kim*, Young Min Kim<br/><i>(*Equally contributed)</i></p>
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
            author=<p>Sang Min Kim, <b>Changwoon Choi</b>, Hyeongjun Heo, Young Min Kim</p>
            project_page="https://3d.snu.ac.kr/publications/ColorTransformModule"
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
            author=<p>Junho Kim, <b>Changwoon Choi</b>, Hojun Jang, Young Min Kim</p>
            project_page="https://3d.snu.ac.kr/publications/LDL"
            paper="https://arxiv.org/pdf/2308.13989.pdf"
            video="https://www.youtube.com/watch?v=cQ5l4rauNY0"
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
            author=<p><b>Changwoon Choi</b>, Sang Min Kim, Young Min Kim</p>
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
            author=<p>Junho Kim, Hojun Jang, <b>Changwoon Choi</b>, Young Min Kim</p>
            project_page="https://3d.snu.ac.kr/publications/CPO"
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
            author=<p>Dongsu Zhang, <b>Changwoon Choi</b>, Inbum Park, Young Min Kim</p>
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
            author=<p>Junho Kim, <b>Changwoon Choi</b>, Hojun Jang, Young Min Kim</p>
            project_page="https://3d.snu.ac.kr/publications/PICCOLO"
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
            author=<p>Dongsu Zhang, <b>Changwoon Choi</b>, Jeonghwan Kim, Young Min Kim</p>
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
