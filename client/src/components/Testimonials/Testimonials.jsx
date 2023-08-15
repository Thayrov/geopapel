import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/testimonials`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTestimonials(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box p={{ base: '10vw' }}>
            <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Testimonios
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Geo Papel
            </Text>
            <SimpleGrid
                columns={{ base: 1, md: 1, lg: 3 }}
                spacing={{ base: '13vw', md: '4.3vw', lg: '2.5vw' }}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Testimonials;
