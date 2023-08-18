import { Box, Grid, GridItem, Link, Text } from '@chakra-ui/react';

import FooterCategories from './FooterCategories';
import FooterContact from './FooterContact';
import FooterPayments from './FooterPayments';
import FooterSocial from './FooterSocial';

const Footer = () => {
    return (
        <Box as="footer" w="100%">
            <Grid
                templateColumns={{ base: '1fr', md: ' 1fr', lg: 'repeat(3, 1fr)' }}
                mb={{ lg: 20 }}>
                <GridItem>
                    {' '}
                    <FooterCategories />
                </GridItem>
                <GridItem>
                    <FooterContact />{' '}
                </GridItem>
                <GridItem>
                    <FooterSocial />
                </GridItem>
            </Grid>
            <FooterPayments />
            <Box
                height={{ lg: 14 }}
                backgroundColor="brand.dark-green"
                p={{ base: 4, lg: 4 }}
                color="white">
                <Text>
                    Geo Papel.- 2023. Todos los derechos reservados. Defensa de las y los
                    consumidores.
                    <Text as="b">
                        <Link href="google.com"> Para Reclamos ingrese aquí. </Link>
                    </Text>
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
