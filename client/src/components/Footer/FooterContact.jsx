import { Text, Box, UnorderedList, ListItem, Flex, Image} from '@chakra-ui/react'
import iconFooterContact1 from "../../assets/iconFooterContact1.svg";
import iconFooterContact2 from "../../assets/iconFooterContact2.svg";
import iconFooterContact3 from "../../assets/iconFooterContact3.svg";
import iconFooterContact4 from "../../assets/iconFooterContact4.svg";
const FooterContact = () => {
    return <div>
         
            <Box  ml={{base:10, lg:40}} mt={{base:10, lg:20}}  >
            <Text
                fontWeight={600}
                fontSize={{ base:"20px", lg: "20px" }}>
                Contactanos
            </Text>
            <UnorderedList styleType="none"
                fontSize={{base:"14px", lg: "18px" }}
                width={{base:"80%"}}>
                <ListItem pt={{ base:2, lg: 4 }} >
                    <Flex>
                        <Image src={iconFooterContact1}></Image>
                        <Text pl={4} pt={2}> Domingo Savio 2919, San Isidro, Buenos Aires</Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base:2, lg: 4 }} >
                    <Flex>
                        <Image src={iconFooterContact2}></Image>
                        <Text pl={4} pt={2}> 47239545</Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base:2, lg: 4 }} >
                <Flex>
                        <Image src={iconFooterContact3}></Image>
                        <Text pl={4} pt={2}> 1168070543</Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base:2, lg: 4 }} >
                <Flex>
                        <Image src={iconFooterContact4}></Image>
                        <Text pl={4} pt={2}>hola@geopapel.com.ar</Text>
                    </Flex>
                </ListItem>
            
            </UnorderedList>
        </Box>
    </div>;
};

export default FooterContact;