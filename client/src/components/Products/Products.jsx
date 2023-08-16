import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Box p={{ base: '10vw', md: '10vw', lg: '10.4vw' }}>
            <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Geo Papel
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Productos
            </Text>
            <Flex justifyContent="center">
                <SimpleGrid
                    py="5vw"
                    columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
                    spacing={{ base: '13vw', md: '4.3vw', lg: '3vw', xl: '2.5vw' }}
                    spacingX={{ lg: '20vw' }}>
                    {products.map((product, index) => (
                        <ProductItem key={index} product={product} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default Products;
