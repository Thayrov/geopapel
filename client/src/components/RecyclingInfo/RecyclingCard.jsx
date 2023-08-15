import {Text, Grid, GridItem, Image,Flex } from '@chakra-ui/react';
import recyclingIcon1 from "../../assets/recyclingIcon1.svg";
import recyclingIcon2 from "../../assets/recyclingIcon2.svg";
import recyclingIcon3 from "../../assets/recyclingIcon3.svg";
const RecyclingCard = () => {
    return <div>
        <Grid templateColumns={{base:"1fr", md:"1fr", lg: "repeat(3,1fr)"}} ml={35} mr={35} mt={10}>
        <GridItem>
            <Flex 
            direction="column"
            alignItems="center">
                <Image src={recyclingIcon1}></Image>
                <Text 
                 p={{base:2, lg:6}} 
                width="90%"
                textAlign="center">Geo Papel es una marca sostenible con una visión clara. Valoramos el papel como medio de comunicación y lo hacemos ¡Eco friendly!</Text>
            </Flex>
        </GridItem>
        <GridItem>
            <Flex  
            direction="column"
            alignItems="center"
            textAlign="center">
                <Image src={recyclingIcon2}></Image>
                <Text 
                 p={{base:2, lg:6}}  
                width="90%">Procesos artesanales y respetuosos. Productos compostables y libres de químicos. ¡Geo Papel, cuidando el planeta!</Text>
            </Flex>
        </GridItem>
        <GridItem>
            <Flex
              direction="column"
              alignItems="center"
              textAlign="center"
            >
                <Image src={recyclingIcon3}></Image>
                <Text 
                p={{base:2, lg:6}} 
                width="90%">Empresa triple impacto: reducimos la contaminación al optimizar la materia prima. Geo Papel, sostenibilidad en acción. </Text>
            </Flex>
        </GridItem>

        </Grid>
    </div>;
};

export default RecyclingCard;
