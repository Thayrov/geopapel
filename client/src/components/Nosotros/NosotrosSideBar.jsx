import { Box, Flex, Link, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const NosotrosSideBar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.4;

            if (window.scrollY > scrollThreshold) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={10}
            w={{ base: '31px', md: '36px', lg: '66px' }}
            h={{ base: '152px', md: '170px', lg: '246px' }}
            position={isLargerThan960 ? (isFixed ? 'fixed' : 'absolute') : 'fixed'}
            right={0}
            top={{ base: '50%', md: '45%', lg: '35%' }}
            bg="brand.dark-green"
            borderRadius={{ base: '9px 0px 0px 9px', lg: '12px 0px 0px 12px' }}
            borderWidth={'1px 0px 1px 1px'}
            borderStyle="solid"
            borderColor={'brand.yellow'}
            zIndex="1000">
            <Link href="#contacto">
                <Box
                    as="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width={{ base: '16px', md: '20px', lg: '30px' }}
                    height={{ base: '16px', md: '20px', lg: '30px' }}
                    viewBox="0 0 448 512"
                    cursor="pointer">
                    <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        fill="#F4F1D4"
                    />
                </Box>
            </Link>
            <Link href="#nosotros">
                <Box
                    as="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width={{ base: '16px', md: '20px', lg: '30px' }}
                    height={{ base: '16px', md: '20px', lg: '30px' }}
                    viewBox="0 0 31 31"
                    fill="none"
                    cursor="pointer">
                    <path
                        d="M7.81982 28.1826H2.42946V10.8237H7.81982V28.1826ZM5.12174 8.45579C3.39808 8.45579 2 7.02808 2 5.30438C2 4.47643 2.3289 3.68238 2.91434 3.09693C3.49978 2.51148 4.2938 2.18257 5.12174 2.18257C5.94968 2.18257 6.74371 2.51148 7.32914 3.09693C7.91459 3.68238 8.24348 4.47643 8.24348 5.30438C8.24348 7.02808 6.84482 8.45579 5.12174 8.45579ZM27.9942 28.1826H22.6154V19.7324C22.6154 17.7185 22.5748 15.1359 19.8129 15.1359C17.0104 15.1359 16.5809 17.3238 16.5809 19.5873V28.1826H11.1963V10.8237H16.3662V13.1916H16.4416C17.1612 11.8277 18.9192 10.3884 21.5418 10.3884C26.9971 10.3884 28 13.9809 28 18.6471V28.1826H27.9942Z"
                        fill="#F4F1D4"
                    />
                </Box>
            </Link>
        </Flex>
    );
};

export default NosotrosSideBar;
