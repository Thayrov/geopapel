import { Button, Stack, useBreakpointValue } from '@chakra-ui/react';

const NavbarPages = () => {
    const direction = useBreakpointValue({ base: 'column', lg: 'row' });

    return (
        <Stack direction={direction} spacing={'5vw'}>
            <Button as="a" href="#nosotros" variant="ghost" color="brand.black" fontSize="lg">
                Nosotros
            </Button>
            <Button as="a" href="#reciclaje" variant="ghost" color="brand.black" fontSize="lg">
                Reciclaje
            </Button>
            <Button as="a" href="#productos" variant="ghost" color="brand.black" fontSize="lg">
                Productos
            </Button>
            <Button as="a" href="#testimonios" variant="ghost" color="brand.black" fontSize="lg">
                Testimonios
            </Button>
            <Button as="a" href="#contacto" variant="ghost" color="brand.black" fontSize="lg">
                Contacto
            </Button>
        </Stack>
    );
};

export default NavbarPages;
