import FooterContact from "./FooterContact";
import FooterCategories from "./FooterCategories";
import FooterSocial from "./FooterSocial";
import FooterPayments from "./FooterPayments";
import { Grid, GridItem,Box } from "@chakra-ui/react"

const Footer = () => {
    return (
        <footer>
            <Grid templateColumns={{ base: '1fr', md: ' 1fr', lg: 'repeat(3, 1fr)' }} mb={{lg:20}}  >
                <GridItem> <FooterCategories /></GridItem>
                <GridItem><FooterContact /> </GridItem>
                <GridItem><FooterSocial /></GridItem>
            </Grid>
            <FooterPayments />
            <Box 
            height={{lg:14}}
            backgroundColor="brand.dark-green"
            p={{base:4, lg:4}}
            color="white">
            Geo Papel.- 2023. Todos los derechos reservados. Defensa de las y los consumidores.<b> <a href="google.com"> Para Reclamos ingrese aquí. </a></b> 
            </Box>
        </footer>
    );
};

export default Footer;
