import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import SceneLoader from '../load_scene'
import { Analytics } from '@vercel/analytics/react'

const Scene = dynamic(() => import('../scene'), {
  ssr: false,
  loading: () => <SceneLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034797123756399"
     crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Changwoon's homepage" />
        <meta name="author" content="Changwoon Choi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Changwoon Choi" />
        <meta name="og:title" content="Changwoon Choi" />
        <meta property="og:type" content="website" />
        <title>Changwoon Choi</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="95ch" pt={14}>
      <Scene />

      <Box align="center" h="5em">
      </Box>

        {children}
        <Analytics />

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
