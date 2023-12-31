import { Box, Center, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import Lottie from 'lottie-react';
import animationData from '../../assets/Email2.json';
import iconContact1 from '../../assets/iconContact1.svg';
import iconContact2 from '../../assets/iconContact2.svg';
import iconContact3 from '../../assets/iconContact3.svg';
import iconContact4 from '../../assets/iconContact4.svg';

const ContactData = () => {
    return (
        <Box as="section" mx="0">
            <Center w="100%" h="100%" mt={{ base: 10, lg: 20 }}>
                <Box
                    display={{ base: 'none', md: 'none', lg: 'block' }}
                    w={{ base: '0vw', md: '0vw', lg: '20vw' }}
                    h={{ base: '0vw', md: '0vw', lg: '20vw' }}>
                    <Lottie animationData={animationData} />
                </Box>
            </Center>
            <UnorderedList
                pl={{ base: 0, lg: 20 }}
                styleType="none"
                fontSize={{ base: '14px', md: '20px' }}
                ml="0">
                <ListItem pt={{ base: 0, lg: 4 }}>
                    <Flex>
                        <Image src={iconContact1}></Image>
                        <Text pl={4} pt={2}>
                            Domingo Savio 2919, San Isidro, Buenos Aires
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Flex>
                        <Image src={iconContact2}></Image>
                        <Text pl={4} pt={2}>
                            47239545
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Link href="https://wa.me/5491168070543?">
                        <Flex>
                            <Image src={iconContact3}></Image>
                            <Text pl={4} pt={2}>
                                1168070543
                            </Text>
                        </Flex>
                    </Link>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Flex>
                        <Image src={iconContact4}></Image>
                        <Text pl={4} pt={2}>
                            hola@geopapel.com.ar
                        </Text>
                    </Flex>
                </ListItem>
            </UnorderedList>
        </Box>
    );
};

export default ContactData;
