import { Box, Text } from '@chakra-ui/react';

import RecyclingCard from './RecyclingCard';

const RecyclingInfo = () => {
    return (
        <Box as="section" p={{ base: '10vw' }}>
            <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Info
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Sustentabilidad
            </Text>
            <RecyclingCard />
        </Box>
    );
};

export default RecyclingInfo;
