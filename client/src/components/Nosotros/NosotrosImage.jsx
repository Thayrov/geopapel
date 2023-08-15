import { Box, Center, Flex, Image } from '@chakra-ui/react';

const NosotrosImage = () => {
    return (
        <Flex
            pt={{ base: '5', lg: '20' }}
            w={{ base: '200px', lg: '400px' }}
            h={{ base: '200px', lg: '400px' }}
            bg="brand.yellow"
            m={{ base: '10vh auto 0 auto', lg: '0 auto' }}
            alignItems="center"
            justifyContent="center">
            <Center w="100%" h="100%">
                <Box w="30vh" h="24vh" pb={{ base: '8', lg: '0' }}>
                    <Image
                        src="/src/assets/logo.png"
                        alt="Logo de Geo Papel"
                        boxSize="100%"
                        objectFit="contain"
                    />
                </Box>
            </Center>
        </Flex>
    );
};

export default NosotrosImage;
