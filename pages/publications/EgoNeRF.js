import {
    Container,
    Heading,
    Badge,
    Link,
    List,
    ListItem,
    Box,
    Text,
    SimpleGrid,
    AspectRatio,
    // Image
  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import { useState } from "react";

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 8.0
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <img
        src={src}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );
}

  const Publication = () => (
    <Layout title="EgoNeRF">
      <Container>
        <Title>
          Balanced Spherical Grid for Egocentric View Synthesis <Badge>CVPR 2023</Badge>
        </Title>
        <SimpleGrid columns={3} gap={6}>
          <Box w="100%" textAlign="center">
            <Link href="https://changwoon.info" target="_blank">
              <Text fontSize="14" fontWeight="800">Changwoon Choi</Text>
            </Link>
          </Box>
          <Box w="100%" textAlign="center">
            <Link href="https://sangminkim-99.github.io" target="_blank">
              <Text fontSize="14" fontWeight="800">Sang Min Kim</Text>
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
            <Text fontSize="12">Seoul National University</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <Text fontSize="12">Seoul National University</Text>
          </Box>
        </SimpleGrid>

        <Box align="center" h="1em">
        </Box>

        <Heading as="h3" variant="section-title">
         Overview Video
        </Heading>
        <AspectRatio maxW="95ch" ratio={1.776} my={4}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/D-lsBhVP8zw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </AspectRatio>
        <center><Text fontSize="12">CVPR Technical Talk Video</Text></center>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>NeRF, Egocentric video, Large-scale</span>
          </ListItem>
          <ListItem>
            <Meta>Paper</Meta>
            <Link href="https://openaccess.thecvf.com/content/CVPR2023/html/Choi_Balanced_Spherical_Grid_for_Egocentric_View_Synthesis_CVPR_2023_paper.html" target="_blank">
              PDF Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Dataset</Meta>
            <Link href="https://drive.google.com/drive/folders/1kqLAATjSSDwfLHI5O7RTfM9NOUi7PvcK?usp=sharing" target="_blank">
              Google Drive Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/changwoonchoi/EgoNeRF" target="_blank">
              GitHub Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Video</Meta>
            <Link href="https://www.youtube.com/watch?v=D-lsBhVP8zw" target="_blank">
              Video Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

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
        <Box align="center" h="0.4em">
        </Box>
        <WorkImage src="/images/publications/egonerf_teaser.jpg" alt="EgoNeRF_teaser" />

        <Heading as="h3" variant="section-title">
          Dataset Overview
        </Heading>
        <P>
          EgoNeRF takes a casual &quot;Egocentric Video&quot; as input.
          We demonstrate some samples from our synthetic OmniBlender dataset and real-world Ricoh360 dataset.
          By simply rotating the camera attached to the stick, we can capture a large environment around the viewer.
          These videos are low-resolution version of our original dataset.
          You can download the dataset from the link above.
        </P>
        <Heading as="h4" variant="section-subtitle">
          OmniBlender
        </Heading>
        <SimpleGrid columns={{sm: 1, md: 4}} gap={2}>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/barbershop.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/italian-flat.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/bistro_bike.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/pavilion_midday_pond.webm" type="video/webm" />
          </video>
        </SimpleGrid>

        <Heading as="h4" variant="section-subtitle">
          Ricoh360
        </Heading>
        <SimpleGrid columns={{sm: 1, md: 4}} gap={2}>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/bricks.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/bridge.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/ddp.webm" type="video/webm" />
          </video>
          <video width="100%" autoplay="autoplay" controls="controls" loop="loop">
            <source src="/images/publications/poster.webm" type="video/webm" />
          </video>
        </SimpleGrid>

        <Box align="center" h="1em">
        </Box>

        <Heading as="h3" variant="section-title">
          Qualitative Results
        </Heading>
        <Box align="center" h="0.3em">
        </Box>
        <Heading as="h4" variant="section-subtitle">
          Free-view Rendered Video
        </Heading>
        <video width="100%" controls="controls">
          <source src="/images/publications/barbershop_splitline_white.webm" type="video/webm" />
        </video>
        <Box align="center" h="0.5em">
        </Box>
        <video width="100%" controls="controls">
          <source src="/images/publications/bistro_bike_splitline_white.webm" type="video/webm" />
        </video>

        <Box align="center" h="1em">
        </Box>

        <Heading as="h4" variant="section-subtitle">
          Comparison with Baselines (Hover your mouse over the photo to zoom in!)
        </Heading>
        - Bistro Bike scene  in OmniBlender dataset
        <SimpleGrid columns={{sm: 1, md: 3}} gap={2}>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_gt.png"
            />
            <Text fontSize="sm">Ground Truth</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_mipnerf360.png"
            />
            <Text fontSize="sm">Mip-NeRF 360</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_NeRF.png"
            />
            <Text fontSize="sm">NeRF</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_DVGO.png"
            />
            <Text fontSize="sm">DVGO</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_TensoRF.png"
            />
            <Text fontSize="sm">TensoRF</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bistro_bike_EgoNeRF.png"
            />
            <Text fontSize="sm">EgoNeRF (Ours)</Text>
          </Box>
        </SimpleGrid>

        <Box align="center" h="1em">
        </Box>

        - Bricks scene in Ricoh360 dataset
        <SimpleGrid columns={{sm: 1, md: 3}} gap={2}>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width={"100%"}
              src="/images/publications/bricks_gt.png"
            />
            <Text fontSize="sm">Ground Truth</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bricks_mipnerf360.png"
            />
            <Text fontSize="sm">Mip-NeRF 360</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bricks_NeRF.png"
            />
            <Text fontSize="sm">NeRF</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bricks_DVGO.png"
            />
            <Text fontSize="sm">DVGO</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bricks_TensoRF.png"
            />
            <Text fontSize="sm">TensoRF</Text>
          </Box>
          <Box w="100%" textAlign="center">
            <ImageMagnifier
              width="100%"
              src="/images/publications/bricks_EgoNeRF.png"
              className="magnifier"
            />
            <Text fontSize="sm">EgoNeRF (Ours)</Text>
          </Box>
        </SimpleGrid>

        <Box align="center" h="1em">
        </Box>
        <Heading as="h3" variant="section-title">
          Citation
        </Heading>
        <Box bg="rgba(0.9, 0.9, 0.9, 0.1)" borderRadius="lg" padding={3} overflowX="scroll">
          <Text fontSize={12}>
            <pre>
            @inproceedings&#123;Choi_2023_CVPR,<br/>  author  = &#123;Choi, Changwoon and Kim, Sang Min and Kim, Young Min&#125;,<br/>  title   = &#123;Balanced Spherical Grid for Egocentric View Synthesis&#125;,<br/>  booktitle = &#123;Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)&#125;,<br/>  month   = &#123;June&#125;,<br/>  year    = &#123;2023&#125;,<br/>  pages   = &#123;16590-16599&#125;<br/>&#125;
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

