import './index.css';

import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        white: '#FEFFF6',
        yellow: '#F4F1D4',
        black: '#414141',
        'light-green': '#E0E7C0',
        'dark-green': '#7B8B28',
    },
};
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
