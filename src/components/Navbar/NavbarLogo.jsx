import { Box, Image } from '@chakra-ui/react';

const NavbarLogo = () => {
    return (
        <Box w="10vh" h="8vh">
            <Image
                src="/src/assets/logo.png"
                alt="Logo de Geopapel"
                boxSize="100%"
                objectFit="contain"
            />
        </Box>
    );
};

export default NavbarLogo;
