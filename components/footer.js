import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="right" fontSize="sm">
      <Box>
        Erd&ouml;s = {' '}
        <Link as={NextLink} href='https://www.csauthors.net/distance/changwoon-choi/paul-erdos' target='_blank'>
          4
        </Link>
        ,
        Dijkstra = {' '}
        <Link as={NextLink} href='https://www.csauthors.net/distance/changwoon-choi/edsger-w-dijkstra' target='_blank'>
          5
        </Link>
      </Box>
      <Box align="center" h="1.5em"></Box>
      <Box opacity={0.4} margin-top="100em">
        This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama&apos;s website</a>
      </Box>
    </Box>
  )
}

export default Footer
