import { Box,Text,Grid,GridItem,Center,Flex } from '@chakra-ui/react'; 
import Lottie from 'lottie-react';
import animationData from '../../assets/Email2.json';
import ContactData from "./ContactData.jsx"
import ContactForm from"./ContactForm.jsx"
const ContactInfo = () => {
    return (
        <section>
            
            <Box p={{ base: '6.5vw', lg: '10vw' }}>
                <Grid templateColumns={{base:"1fr", md:"1fr", lg: "repeat(2,1fr)"}}  mr={35} mt={10}>
                    <GridItem>
                        <Flex> 
                    <Box>
                        <Text fontSize={{ base: '28px', md: '32px', lg: '48px' }} fontWeight="400"> Info </Text>
                        <Text fontSize={{ base: '42px', md: '64px', lg: '72px' }} fontWeight="600"> Contacto</Text> 
                    </Box>
          
                    <Center w="100%" h="100%">
                        <Box display={{ base: "block", md: "block", lg:"none" }}
                            w={{ base: '26vw', md: '16vw', lg: '20vw' }}
                            h={{ base: '26vw', md: '16vw', lg: '20vw' }}
                            >
                            <Lottie animationData={animationData} />
                        </Box>
                    </Center>
                 </Flex>
                        <ContactForm/>
                    </GridItem> 
                    <GridItem>
                        <ContactData />
                    </GridItem>
                </Grid>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                    mb={{base:10, lg:20}}
                    width={{ base: '90vw', lg: '80vw' }}
                    height={{ base: '30vw', lg: '20vw' }}
                    borderRadius="20px"
                    boxShadow="0 0 0 2px transparent"
                    overflow="hidden">
                    <iframe
                        title="Acceso a ubicación de Google Maps de Geo Papel"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.5130029868246!2d-58.5497199233469!3d-34.4898765514966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb073ddfae825%3A0xc54b35df458cc8b2!2sDomingo%20Savio%202919%2C%20B1642FUE%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2smx!4v1692051109378!5m2!1sen!2smx"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Box>
        </section>
    );
};

export default ContactInfo;
