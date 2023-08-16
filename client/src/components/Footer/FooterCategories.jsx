
import {Text, Box,UnorderedList,ListItem} from '@chakra-ui/react'

const FooterCategories = () => {
    return <div>
         <Box ml={{base:10, lg:40}} mt={{base:10, lg:20}}>
                <Text
                fontWeight={600}
                fontSize={{base:"20px", lg:"20px"}}>
                    Categorías
                </Text>
                <UnorderedList styleType="none" 
                 fontSize={{base:"20px", lg:"20px"}}>
                    <ListItem pt={{base:2, lg:6}} ><a href="#nosotros">Nosotros  </a></ListItem>
                    <ListItem pt={{base:2, lg:6}} ><a href="#productos"> Productos</a></ListItem>
                    <ListItem  pt={{base:2, lg:6}}><a href="#testimonios">Testimonios</a></ListItem>
                    <ListItem pt={{base:2, lg:6}} ><a href="#sustentabilidad">Sustentabilidad</a></ListItem>
                    <ListItem pt={{base:2, lg:6}} ><a href="#contacto">Contacto</a></ListItem>
                </UnorderedList>
            </Box>
    </div>;
};

export default FooterCategories;
