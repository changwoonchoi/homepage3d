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
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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

const Home = () => (
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
          My current research interest is in the field of computer vision and graphics with neural implicit representations including NeRF.
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
          <Link as={NextLink} href="https://3d.snu.ac.kr" passHref scroll={false}>
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
          Visiting Graduate Student, University of California, San Diego, advised by {' '}
          <Link as={NextLink} href="https://cseweb.ucsd.edu/~haosu/" passHref scroll={false}>
            Hao Su
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2023.12 - </BioYear>
          Research Scientist Intern, {' '}
          <Link as={NextLink} href="https://www.navercloudcorp.com/" passHref scroll={false}>
            NAVER Cloud (CLOVA)
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>Conference Reviewer</BioYear>
          CVPR, ICCV, ECCV, 3DV, NeurIPS
        </BioSection>
      </Section>

      <Box align="center" h="5em">
      </Box>


    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
