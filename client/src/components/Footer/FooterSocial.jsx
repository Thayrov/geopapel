import { Box, Flex, Image, Text } from '@chakra-ui/react';

import socialInstagram from '../../assets/socialInstagram.svg';
import socialLinkedin from '../../assets/socialLinkedin.svg';

const FooterSocial = () => {
    return (
        <div>
            <Box ml={{ base: 10, lg: 40 }} mt={{ base: 10, lg: 20 }}>
                <Text
                    fontWeight={600}
                    fontSize={{ base: '20px', lg: '20px' }}
                    mb={{ base: 4, lg: 6 }}>
                    Sigamos conectados
                </Text>
                <Flex>
                    <a href="https://www.instagram.com/eco_comunicacion/">
                        <Image
                            height={{ base: '90%', lg: '100%' }}
                            pr={{ base: 2, lg: 2 }}
                            src={socialInstagram}
                        />{' '}
                    </a>
                    <a href="https://www.linkedin.com/company/eco-comunicacion/">
                        <Image
                            height={{ base: '90%', lg: '100%' }}
                            pl={{ base: 2, lg: 2 }}
                            src={socialLinkedin}
                        />
                    </a>
                </Flex>
            </Box>
        </div>
    );
};

export default FooterSocial;
