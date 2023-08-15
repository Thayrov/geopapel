import {Text,Box } from '@chakra-ui/react';

import RecyclingCard from "./RecyclingCard";
const RecyclingInfo = () => {
    return (
        <section>
            <Box p={{ base: '6.5vw', lg: '10vw' }}>
              <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Info
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Sustentabilidad
            </Text>
            <RecyclingCard/>
            </Box>
        </section>
    );
};

export default RecyclingInfo;
