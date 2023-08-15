import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const FooterCategories = () => {
    return (
        <div>
            <Box ml={{ base: 10, lg: 40 }} mt={{ base: 10, lg: 20 }}>
                <Text fontWeight={600} fontSize={{ base: '20px', lg: '20px' }}>
                    Categorías
                </Text>
                <UnorderedList styleType="none" fontSize={{ base: '20px', lg: '20px' }}>
                    <ListItem pt={{ base: 2, lg: 6 }}>Nosotros</ListItem>
                    <ListItem pt={{ base: 2, lg: 6 }}>Productos</ListItem>
                    <ListItem pt={{ base: 2, lg: 6 }}>Testimonios</ListItem>
                    <ListItem pt={{ base: 2, lg: 6 }}>Reciclaje</ListItem>
                    <ListItem pt={{ base: 2, lg: 6 }}>Contacto</ListItem>
                </UnorderedList>
            </Box>
        </div>
    );
};

export default FooterCategories;
