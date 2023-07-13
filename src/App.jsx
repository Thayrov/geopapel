import './App.css';

import {
    Banner,
    ContactInfo,
    Footer,
    InstagramInfo,
    Navbar,
    Newsletter,
    Products,
    RecyclingInfo,
    Testimonials,
} from './components';

import { Box } from '@chakra-ui/react';

function App() {
    return (
        <Box bg="brand.yellow" w="100vw" minH="100vh">
            <Navbar />
            <Box id="nosotros">
                <Banner />
            </Box>
            <Box id="reciclaje">
                <RecyclingInfo />
            </Box>
            <Box id="productos">
                <Products />
            </Box>
            <Box id="testimonios">
                <Testimonials />
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
