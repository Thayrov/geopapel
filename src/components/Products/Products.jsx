import { Box, Text } from '@chakra-ui/react';

import ProductItem from './ProductItem';

const Products = () => {
    return (
        <Box p={{ base: '10', lg: '100' }}>
            <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Geo Papel
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Productos
            </Text>
            <Box>
                <ProductItem />
            </Box>
        </Box>
    );
};

export default Products;
