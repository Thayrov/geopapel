import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    return (
        <Card
            box-shadow="4px 9px 14px 0px rgba(155, 156, 142, 0.19)"
            borderRadius="20px"
            direction={{ base: 'column', md: 'row', lg: 'column' }}
            overflow="hidden"
            variant="outline"
            p={0}
            m={0}>
            <Box
                as="div"
                background={`url(${product.imageURL}) no-repeat center center`}
                backgroundSize="cover"
                borderRadius={{
                    base: '20px 20px 0px 0px',
                    md: '20px 0px 0px 20px',
                    lg: '20px 20px 0px 0px',
                }}
                width="100%"
                height={{ base: '359px', md: '359px', lg: '27.21vw' }}
            />

            <Stack
                m="0 auto"
                width={{ base: '330px', md: '364px', lg: '25vw' }}
                columns={{ base: '2', md: '1', lg: '2' }}
                minChildWidth="120px"
                spacingX="60"
                spacingY="2"
                borderRadius={{
                    base: '0px 0px 20px 20px',
                    md: '0px 20px 20px 0px',
                    lg: '0px 0px 20px 20px',
                }}>
                <CardBody>
                    <Heading fontWeight="600" fontSize="xl">
                        {product.title}
                    </Heading>

                    <Text fontWeight="600" fontSize="xl">
                        ${product.price}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Text fontSize="sm">{product.description}</Text>
                    <Link
                        href="https://wa.me/5491168070543?text=Hola,%20me%20interesa%20cotizar%20uno%20de%20sus%20productos,%20¿me%20pueden%20ayudar?"
                        isExternal>
                        <Button
                            rightIcon={<ExternalLinkIcon />}
                            height="40px"
                            width="100px"
                            bgColor="brand.dark-green"
                            color="brand.white"
                            box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
                            _hover={{ bg: 'brand.black' }}>
                            Cotizar
                        </Button>
                    </Link>
                </CardFooter>
            </Stack>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;

/* import { Box, Button, Link, SimpleGrid, Text } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    return (
        <SimpleGrid
            bgColor="brand.white"
            borderRadius="20px"
            justifyContent={'space-between'}
            alignItems={'space-between'}
            box-shadow="4px 9px 14px 0px rgba(155, 156, 142, 0.19)"
            columns={{ base: '1', md: '2', lg: '1' }}>
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
                alt={product.title}
            />
            <SimpleGrid
                m="0 auto"
                width={{ base: '330px', md: '364px', lg: '25vw' }}
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
                <Link
                    href="https://wa.me/5491147239545?text=Hola,%20me%20interesa%20cotizar%20uno%20de%20sus%20productos,%20¿me%20pueden%20ayudar?"
                    isExternal>
                    <Button
                        rightIcon={<ExternalLinkIcon />}
                        height="40px"
                        width="100px"
                        bgColor="brand.dark-green"
                        color="brand.white"
                        box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
                        _hover={{ bg: 'brand.black' }}>
                        Cotizar
                    </Button>
                </Link>
            </SimpleGrid>
        </SimpleGrid>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItem;
 */
