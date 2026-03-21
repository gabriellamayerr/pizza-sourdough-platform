import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
	<ChakraProvider resetCSS>
		<App />
	</ChakraProvider>
)
