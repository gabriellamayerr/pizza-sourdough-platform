import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme} resetCSS>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<App />
	</ChakraProvider>
)
