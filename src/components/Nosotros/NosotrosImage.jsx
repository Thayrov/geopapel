import { Center, Flex } from '@chakra-ui/react';

import Lottie from 'lottie-react';
import animationData from '../../assets/dy9qyU3qrv.json';

const NosotrosImage = () => {
    return (
        <Flex
            pt={{ base: '0', lg: '20' }}
            w={{ base: '200px', lg: '400px' }}
            h={{ base: '200px', lg: '400px' }}
            bg="brand.yellow"
            m="0 auto"
            alignItems="center"
            justifyContent="center">
            <Center w="100%" h="100%">
                <Lottie animationData={animationData} />
            </Center>
        </Flex>
    );
};

export default NosotrosImage;
