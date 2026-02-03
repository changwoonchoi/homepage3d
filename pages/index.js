import React, { useState } from 'react';
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  chakra,
  Collapse,
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoMailUnread, IoDocumentAttach, IoSchool } from 'react-icons/io5'
import Image from 'next/image'
// import Script from 'next/script'
import LogoBanner from '../components/logobanner'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [showOldNews, setShowOldNews] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
  <Layout>
    <Container>

      <Box display={{ lg: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Changwoon Choi
          </Heading>
          <p><b>Ph.D. Student</b> <br/>Seoul National University</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/changwoon.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="150"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m a PhD student at Seoul National University ECE department, advised by Prof.{' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false}>
            Young Min Kim
          </Link>
          .
          Recently, I was a research scientist intern at {' '}
          <Link as={NextLink} href="https://about.meta.com/realitylabs/" passHref scroll={false} target="_blank">
            Meta Reality Labs
          </Link>
          .
          Before that, I visited {' '}
          <Link as={NextLink} href="https://cseweb.ucsd.edu/~haosu/" passHref scroll={false} target="_blank">
            UCSD
          </Link>
          &nbsp;and worked as a research intern at{' '}
          <Link as={NextLink} href="https://www.navercloudcorp.com/" passHref scroll={false} target="_blank">
            NAVER Cloud
          </Link>
          &nbsp;during my PhD.
          I obtained my Bacheler&apos;s degree from Seoul National University.
        </Paragraph>
        <Box height="0.3em"></Box>
        <Paragraph>
          My research is focused on 3D computer vision and graphics.
          Recently, I have been working on 3D reconstruction and neural rendering, ranging from photorealistic reconstruction to more conceptual and abstract representations.
        </Paragraph>
        <Box height="0.3em"></Box>
        <Paragraph>
          I am always open to new opportunities and collaborations! Please feel free to contact me if you are interested in my research.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/publications"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Publications
          </Button>
        </Box>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <BioSection>
          <BioYear>2026.01</BioYear>
          A paper about geometry and observation-aware 3D scene reconstruction accepted to IEEE VR (poster).
        </BioSection>
        <BioSection>
          <BioYear>2026.01</BioYear>
          I&apos;m attending IPIU. See you at Jeju!
        </BioSection>
        <BioSection>
          <BioYear>2025.11</BioYear>
          I gave a talk at&nbsp;
          <Link as={NextLink} href="https://studios.disneyresearch.com/" passHref scroll={false} target="_blank">Disney Research|Studios</Link>
          !
        </BioSection>
        <BioSection>
          <BioYear>2025.06</BioYear>
          <Link as={NextLink} href="https://changwoonchoi.github.io/HCP" passHref scroll={false} target="_blank">Humans as a Calibration Pattern</Link>
          &nbsp;has been accepted to ICCV 2025!
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-subtitle"
          cursor="pointer"
          onClick={() => setShowOldNews(!showOldNews)}
          display="flex"
        >
          Old News
          {showOldNews ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Heading>
        <Collapse in={showOldNews} animateOpacity>
          <BioSection>
            <BioYear>2025.05</BioYear>
            I&apos;ll be joining {' '}
            <Link as={NextLink} href="https://about.meta.com/realitylabs/" passHref scroll={false} target="_blank">
              Meta Reality Labs
            </Link>
            &nbsp;in London as a research scientist intern!
          </BioSection>
          <BioSection>
            <BioYear>2025.04</BioYear>
            I gave a talk at Seoul Science High School, from which I graduated 11 years ago!
          </BioSection>
          <BioSection>
            <BioYear>2025.03</BioYear>
            <Link as={NextLink} href="https://jaeah.me/liv3stroke_web" passHref scroll={false} target="_blank">Liv3Stroke</Link>
            &nbsp;has been accepted to CVPR 2025!
          </BioSection>
          <BioSection>
            <BioYear>2025.01</BioYear>
            I received a SNU INMC Young Researcher Award!
          </BioSection>
          <BioSection>
            <BioYear>2024.10</BioYear>
            I&apos;m attending ECCV 2024. See you at Milano!
          </BioSection>
          <BioSection>
            <BioYear>2024.07</BioYear>
            I&apos;m attending SIGGRAPH 2024. See you at Denver!
          </BioSection>
          <BioSection>
            <BioYear>2023.12</BioYear>
            I&apos;m joining NAVER Cloud (CLOVA) as a research intern.
          </BioSection>
          <BioSection>
            <BioYear>2023.10</BioYear>
            I&apos;m attending Pacific Graphics 2023. See you at Daejeon!
          </BioSection>
          <BioSection>
            <BioYear>2023.06</BioYear>
            I&apos;m attending CVPR 2023. See you at Vancouver!
          </BioSection>
          <BioSection>
            <BioYear>2023.05</BioYear>
            Visiting UC San Diego as a visiting graduate student, hosted by Hao Su.
          </BioSection>
        </Collapse>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Info
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto: hello@changwoon.info" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailUnread/>}
              >
                e-mail
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="CV_Changwoon.pdf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoDocumentAttach/>}
              >
                Curriculum Vitae
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/changwoonchoi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://scholar.google.com/citations?user=DmPZo4QAAAAJ" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSchool />}
              >
                Google Scholar
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2020.09 - Present</BioYear>
          M.S./Ph.D., Seoul National University, ECE, advised by {' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false} target="_blank">
            Young Min Kim
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2014.03 - 2020.08</BioYear>
          B.S., Seoul National University, ECE
        </BioSection>
        <BioSection>
          <BioYear>2011.03 - 2014.02</BioYear>
          Seoul Science High School
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2025.06 - 2025.12</BioYear>
          Research Scientist Intern, {' '}
          <Link as={NextLink} href="https://about.meta.com/realitylabs/" passHref scroll={false} target="_blank">
            Meta Reality Labs
          </Link>
          , hosted by {' '}
          <Link as={NextLink} href="https://thodan.github.io/" passHref scroll={false} target="_blank">
            Tomas Hodan
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2023.12 - 2024.03</BioYear>
          Research Intern, {' '}
          <Link as={NextLink} href="https://www.navercloudcorp.com/" passHref scroll={false} target="_blank">
            NAVER Cloud (CLOVA)
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2023.05 - 2023.12</BioYear>
          Visiting Graduate Student, University of California, San Diego, hosted by {' '}
          <Link as={NextLink} href="https://cseweb.ucsd.edu/~haosu/" passHref scroll={false} target="_blank">
            Hao Su
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2016.09 - 2018.09</BioYear>
          ROK Air Force Operations Command (Mandatory Military Service)
        </BioSection>
        <BioSection>
          <BioYear>Reviewer</BioYear>
          SIGGRAPH, SIGGRAPH Asia, Pacific Graphics, TOG, TVCG, CGF, CVPR, ICCV, ECCV, 3DV, WACV, ACCV, NeurIPS
        </BioSection>
      </Section>
      <LogoBanner />

      <Heading
        onClick={() => setShowMap(!showMap)}
        display="flex"
        cursor="pointer"
        variant="hidden-component"
      >
        Traveled countries
        {showMap ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Heading>
      <Collapse in={showMap} animateOpacity align="center">
        <iframe src="https://visitedplaces.com/embed/?map=world&projection=geoOrthographic&position=3.5_130.1_36.3_-133.3_-35.8&theme=dark-yellow&width=594&height=435&water=1&graticule=1&names=1&duration=2000&placeduration=100&slider=0&autoplay=0&autozoom=none&autostep=0&home=KR&places=~US_CA_GB_FR_NL_CH_CZ_IT_DE_CN_JP_TH_KH_LA_AU_MY_BE_AT" style={{width: "70%", height: "250px"}}></iframe>
      </Collapse>

      <Box align="center" h="2em">
      </Box>



    </Container>
  </Layout>
  );
};

export default Home
export { getServerSideProps } from '../components/chakra'
