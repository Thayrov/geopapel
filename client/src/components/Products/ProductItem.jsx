import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    return (
        <Card
            display="flex"
            box-shadow="4px 9px 14px 0px rgba(155, 156, 142, 0.19)"
            borderRadius="20px"
            direction={{ base: 'column', md: 'row', lg: 'column' }}
            overflow="hidden"
            variant="outline"
            p={0}
            m={0}
            width={{ base: '80vw', md: '80vw', lg: '24.73vw' }}
            height={{ base: '125.34vw', md: '41.27vw', lg: '35.09vw' }}>
            <Image
                justifyContent="center"
                src={product.imageURL}
                alt={product.title}
                objectFit="cover"
                objectPosition="50 -50"
                width={{ base: '80vw', md: '37.8vw', lg: '24.73vw' }}
                height={{ base: '86.8vw', md: '41.36vw', lg: '26.92vw' }}
            />

            <Stack
                p="0"
                display="flex"
                alignItems="space-around"
                justifyContent="center"
                spacing="0"
                m="0 auto"
                width={{ base: '80vw', md: '42.2vw', lg: '24.73vw' }}
                height={{ base: '38.55vw', md: '42.89vw', lg: '158px' }}
                columns={{ base: '2', md: '1', lg: '2' }}
                borderRadius={{
                    base: '0px 0px 20px 20px',
                    md: '0px 20px 20px 0px',
                    lg: '0px 0px 20px 20px',
                }}>
                <CardBody
                    pt="5"
                    display="flex"
                    px="4"
                    flexDirection={{ base: 'row', md: 'column', lg: 'row' }}
                    justifyContent={{
                        base: 'space-between',
                        md: 'space-evenly',
                        lg: 'space-between',
                    }}>
                    <Heading
                        pt={{ base: '0', md: '3', lg: '0' }}
                        fontWeight="600"
                        fontSize={{ base: '20px', md: '28px', lg: '24px' }}>
                        {product.title}
                    </Heading>
                    <Text
                        pt={{ base: '0', md: '4', lg: '0' }}
                        fontWeight="600"
                        fontSize={{ base: '20px', md: '28px', lg: '24px' }}>
                        ${product.price}
                    </Text>
                </CardBody>
                <CardFooter
                    display="flex"
                    flexDirection={{ base: 'row', md: 'column', lg: 'row' }}
                    justifyContent={{
                        base: 'space-between',
                        md: 'space-evenly',
                        lg: 'space-between',
                    }}>
                    <Text
                        pb={{ base: '0', md: '6', lg: '0' }}
                        fontSize={{ base: '12px', md: '20px', lg: '16px' }}>
                        {product.description}
                    </Text>
                    <Link
                        pb={{ base: '0', md: '8', lg: '0' }}
                        pt={{ base: '0', md: '5', lg: '0' }}
                        href={`https://wa.me/5491168070543?text=Hola,%20me%20interesa%20cotizar%20el%20producto:%20"+${product.title}+",%20¿me%20pueden%20ayudar?`}
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
