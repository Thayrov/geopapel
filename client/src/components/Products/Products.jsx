import { Box, SimpleGrid, Text } from '@chakra-ui/react';
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
        <Box p={{ base: '10', lg: '100' }}>
            <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400">
                Geo Papel
            </Text>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600">
                Productos
            </Text>
            <SimpleGrid
                columns={{ base: 1, md: 1, lg: 3 }}
                spacing={{ base: '48px', md: '33px', lg: '48px' }}>
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Products;
