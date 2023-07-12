import { Button, Stack, useBreakpointValue } from '@chakra-ui/react';

const NavbarPages = () => {
    const direction = useBreakpointValue({ base: 'column', lg: 'row' });

    return (
        <Stack direction={direction} spacing={'5vw'}>
            <Button variant="ghost" color="brand.black" fontSize="lg">
                Nosotros
            </Button>
            <Button variant="ghost" color="brand.black" fontSize="lg">
                Reciclaje
            </Button>
            <Button variant="ghost" color="brand.black" fontSize="lg">
                Productos
            </Button>
            <Button variant="ghost" color="brand.black" fontSize="lg">
                Testimonios
            </Button>
            <Button variant="ghost" color="brand.black" fontSize="lg">
                Contacto
            </Button>
        </Stack>
    );
};

export default NavbarPages;
