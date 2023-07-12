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
            <Banner />
            <Testimonials />
            <Products />
            <RecyclingInfo />
            <ContactInfo />
            <Newsletter />
            <InstagramInfo />
            <Footer />
        </Box>
    );
}

export default App;
