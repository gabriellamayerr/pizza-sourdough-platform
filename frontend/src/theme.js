import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: 'gray.50',
      color: 'gray.800',
      fontFamily: 'Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial',
    },
  },
}

const theme = extendTheme({ config, styles })

export default theme
