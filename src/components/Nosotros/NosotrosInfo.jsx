import { Box, Button, Text } from '@chakra-ui/react';

const NosotrosInfo = () => {
    return (
        <Box
            display={{ base: 'flex', lg: 'block' }}
            flexDirection="column"
            alignItems="center"
            textAlign={{ base: 'center', lg: 'left' }}>
            <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600" mb={4}>
                Geo Papel
            </Text>
            <Text
                fontSize={{ base: '14px', md: '20px' }}
                fontWeight="400"
                mb={{ base: '6', md: '10' }}
                px={{ base: '12', lg: '0' }}>
                Busca formar parte de un nuevo paradigma en donde lo social, económico y ambiental
                logran una amigable coexistencia. Creemos que el cambio hacia un mundo sustentable
                es perfectamente alcanzable y realizable. Nuestros productos están realizados
                exclusivamente con materiales y recursos alineados al cuidado del medio ambiente con
                el fin de reducir el impacto que tenemos sobre el planeta tierra, queremos ser parte
                del cambio y acompañarte en el camino hacia el.
            </Text>
            <Button
                height="66px"
                width={{ base: '330px', lg: '220px' }}
                bgColor="brand.dark-green"
                color="brand.white"
                box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
                _hover={{ bg: 'brand.black' }}>
                Ver Productos
            </Button>
        </Box>
    );
};

export default NosotrosInfo;
