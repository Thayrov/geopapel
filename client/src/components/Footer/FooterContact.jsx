import { Box, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import iconFooterContact1 from '../../assets/iconFooterContact1.svg';
import iconFooterContact2 from '../../assets/iconFooterContact2.svg';
import iconFooterContact3 from '../../assets/iconFooterContact3.svg';
import iconFooterContact4 from '../../assets/iconFooterContact4.svg';

const FooterContact = () => {
    return (
        <Box ml={{ base: 10, lg: 40 }} mt={{ base: 10, lg: 20 }}>
            <Text fontWeight={600} fontSize={{ base: '20px', lg: '20px' }}>
                Contactanos
            </Text>
            <UnorderedList
                styleType="none"
                fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                width={{ base: '80%', md: '80%', lg: '80%' }}>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Flex>
                        <Image src={iconFooterContact1}></Image>
                        <Text pl={{ base: 4, lg: 4 }} pt={2}>
                            {' '}
                            Domingo Savio 2919, San Isidro, Buenos Aires
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Flex>
                        <Image src={iconFooterContact2}></Image>
                        <Text pl={4} pt={2}>
                            {' '}
                            47239545
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <a href="https://wa.me/5491168070543?">
                        <Flex>
                            <Image src={iconFooterContact3}></Image>
                            <Text pl={4} pt={2}>
                                {' '}
                                1168070543
                            </Text>
                        </Flex>
                    </a>
                </ListItem>
                <ListItem pt={{ base: 2, lg: 4 }}>
                    <Flex>
                        <Image src={iconFooterContact4}></Image>
                        <Text pl={4} pt={2}>
                            hola@geopapel.com.ar
                        </Text>
                    </Flex>
                </ListItem>
            </UnorderedList>
        </Box>
    );
};

export default FooterContact;
