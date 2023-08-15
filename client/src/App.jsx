import './App.css';

import {
    Banner,
    ContactInfo,
    Footer,
    InstagramInfo,
    Navbar,
    Newsletter,
    Nosotros,
    Products,
    RecyclingInfo,
    Testimonials,
} from './components';

import { Box } from '@chakra-ui/react';

function App() {
    return (
        <Box bg="brand.yellow" w="100%" minH="100vh">
            <Navbar />
            <Banner />
            <Box id="nosotros">
                <Nosotros />
            </Box>
            <Box id="testimonios">
                <Testimonials />
            </Box>
            <Box id="productos">
                <Products />
            </Box>
            <Box id="sustentabilidad">
                <RecyclingInfo />
            </Box>
            <Box id="contacto">
                <ContactInfo />
            </Box>
            <Newsletter />
            <InstagramInfo />
            <Footer />
        </Box>
    );
}

export default App;
