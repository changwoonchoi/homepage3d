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

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [showOldNews, setShowOldNews] = useState(false);
  return (
  <Layout>
    <Container>

      <Box display={{ lg: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Changwoon Choi
          </Heading>
          <p><b>Ph.D. Student</b> <br/>3D Computer Vision, Neural Rendering</p>
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
          I&apos;m Ph.D. student at Seoul National University, majoring in Electrical and Computer Engineering, advised by Prof.{' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false}>
            Young Min Kim
          </Link>
          .
          I received my Bacheler&apos;s degree also in Electrical and Computer Engineering from Seoul National University.
          I was a resesarch intern at {' '}
          <Link as={NextLink} href="https://www.navercloudcorp.com/" passHref scroll={false} target="_blank">
            NAVER Cloud (CLOVA)
          </Link>
          .
        </Paragraph>
        <Paragraph>
          My research goal is to capture, reconstruct, visualize, and manipulate the 4D real-world.
          I love to discover and formulate new research problems, especially paractical and challenging ones.
        </Paragraph>
        <Paragraph>
          I am always open to new opportunities and collaborations! Please feel free to contact me if you are interested in my research. <i> I am currently looking for a research internship. </i>
        </Paragraph>
        <Paragraph>
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
          <BioYear>2024.12</BioYear>
          Check our new arXiv preprint{' '}
          <Link as={NextLink} href="https://changwoonchoi.github.io/HCP" passHref scroll={false}>
            Humans as a Calibration Pattern
          </Link>
          !
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
            <Link href="mailto: changwoon.choi00@gmail.com" target="_blank">
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
            <Link href="CV_English.pdf" target="_blank">
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
          <BioYear>2011.03 - 2014.02</BioYear>
          Seoul Science High School
        </BioSection>
        <BioSection>
          <BioYear>2014.03 - 2020.08</BioYear>
          B.S., Seoul National University, ECE
        </BioSection>
        <BioSection>
          <BioYear>2020.09 - Present</BioYear>
          M.S./Ph.D., Seoul National University, ECE, advised by {' '}
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false} target="_blank">
            Young Min Kim
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2016.09 - 2018.09</BioYear>
          ROK Air Force (Operations Command)
        </BioSection>
        <BioSection>
          <BioYear>2023.05 - 2023.12</BioYear>
          Visiting Graduate Student, University of California, San Diego, hosted by {' '}
          <Link as={NextLink} href="https://cseweb.ucsd.edu/~haosu/" passHref scroll={false} target="_blank">
            Hao Su
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
          <BioYear>Reviewer</BioYear>
          SIGGRAPH, SIGGRAPH Asia, Pacific Graphics, CVPR, ICCV, ECCV, 3DV, ACCV, NeurIPS, TOG
        </BioSection>
      </Section>

      <Box align="center" h="5em">
      </Box>


    </Container>
  </Layout>
  );
};

export default Home
export { getServerSideProps } from '../components/chakra'
