import { Box, Image, Text } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.img} alt={product.title} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Text fontWeight="semibold" fontSize="xl">
                        {product.title}
                    </Text>
                </Box>

                <Box>
                    {product.price}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>

                <Box mt="2">
                    <Text fontSize="sm">{product.details}</Text>
                </Box>
            </Box>
        </Box>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;
