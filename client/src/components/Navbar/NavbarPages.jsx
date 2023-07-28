import { Button, Stack, useBreakpointValue } from '@chakra-ui/react';

const NavbarPages = () => {
    const fontSize = useBreakpointValue({ base: '24px', lg: 'xl' });

    return (
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={'2vw'}>
            <Button
                as="a"
                href="#nosotros"
                variant="ghost"
                color="brand.black"
                fontSize={fontSize}
                fontWeight={600}>
                Nosotros
            </Button>
            <Button
                as="a"
                href="#reciclaje"
                variant="ghost"
                color="brand.black"
                fontSize={fontSize}
                fontWeight={600}>
                Reciclaje
            </Button>
            <Button
                as="a"
                href="#productos"
                variant="ghost"
                color="brand.black"
                fontSize={fontSize}
                fontWeight={600}>
                Productos
            </Button>
            <Button
                as="a"
                href="#testimonios"
                variant="ghost"
                color="brand.black"
                fontSize={fontSize}
                fontWeight={600}>
                Testimonios
            </Button>
            <Button
                as="a"
                href="#contacto"
                variant="ghost"
                color="brand.black"
                fontSize={fontSize}
                fontWeight={600}>
                Contacto
            </Button>
        </Stack>
    );
};

export default NavbarPages;
