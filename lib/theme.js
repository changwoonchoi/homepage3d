import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        marginBottom: 5
      },
      'section-subtitle': {
        textDecoration: 'underline',
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3
      },
      'hidden-component': {
        fontSize: 1
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#4367a8', '#ff63c3')(props),
      textUnderlineOffset: 3
    }),
  },
  Container: {
    baseStyle: {
      maxW: 'container.lg'
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}



const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
