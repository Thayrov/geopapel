import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react';

import instagramIcon from '../../assets/instagramIcon.svg';

const InstagramInfo = () => {
    return (
        <Box
            w="100%"
            as="section"
            backgroundColor="white"
            height={{ base: '300px', lg: '450px' }}
            pt={{ base: 16, lg: 24 }}>
            <Flex direction="column" alignItems="center">
                <Text fontSize={{ base: '20px', lg: '24px' }} pb={{ base: 4, lg: 4 }}>
                    Estamos en instagram
                </Text>
                <Flex alignItems="center">
                    <Image p={3} height={{ base: 14, lg: 20 }} src={instagramIcon} />
                    <Text
                        pb={{ base: 4, lg: 4 }}
                        fontWeight={600}
                        fontSize={{ base: '30px', lg: '60px' }}>
                        eco_comunicacion
                    </Text>
                </Flex>
                <Link href="https://www.instagram.com/eco_comunicacion/">
                    <Center>
                        <Button
                            fontSize="20px"
                            p={8}
                            width={{ base: '80%', lg: '200px' }}
                            bgColor="brand.dark-green"
                            color="brand.white"
                            box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
                            borderRadius="20px 20px 20px 20px"
                            _hover={{ bg: 'brand.black' }}>
                            Seguinos
                        </Button>
                    </Center>
                </Link>
            </Flex>
        </Box>
    );
};

export default InstagramInfo;
