import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    return (
        <SimpleGrid columns={{ base: '1', md: '2', lg: '1' }}>
            <Box
                m="0 auto"
                width={{ base: '330px', md: '330px', lg: '25vw' }}
                height={{ base: '359px', md: '359px', lg: '27.21vw' }}
                borderRadius={{
                    base: '20px 20px 0px 0px',
                    md: '20px 0px 0px 20px',
                    lg: '20px 20px 0px 0px',
                }}
                backgroundImage={`url(${product.imageURL})`}
                backgroundSize={{ base: '360px', md: '360px', lg: '28vw' }}
                backgroundPosition="center"
                box-shadow="4px 9px 14px 0px rgba(155, 156, 142, 0.19)"
                alt={product.title}
            />
            <SimpleGrid
                m="0 auto"
                width={{ base: '330px', md: '364px', lg: '25vw' }}
                bgColor="brand.white"
                columns={{ base: '2', md: '1', lg: '2' }}
                minChildWidth="120px"
                spacingX="60"
                spacingY="2"
                borderRadius={{
                    base: '0px 0px 20px 20px',
                    md: '0px 20px 20px 0px',
                    lg: '0px 0px 20px 20px',
                }}>
                <Text fontWeight="600" fontSize="xl">
                    {product.title}
                </Text>

                <Text fontWeight="600" fontSize="xl">
                    ${product.price}
                </Text>
                <Text fontSize="sm">{product.description}</Text>
                <Button
                    height="40px"
                    width="100px"
                    bgColor="brand.dark-green"
                    color="brand.white"
                    box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
                    _hover={{ bg: 'brand.black' }}>
                    Comprar
                </Button>
            </SimpleGrid>
        </SimpleGrid>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;
