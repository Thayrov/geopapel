import { Box, HStack, VStack, useMediaQuery, useToken } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const banners = [
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689646815/alexander-abero-OypnYfdiQgg-unsplash_n4hv5x.jpg',
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689646815/cedric-vt-ua0SnGdN-m8-unsplash_zqlydb.jpg',
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689646815/possessed-photography-1JePildXM7g-unsplash_wbpfdv.jpg',
];

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const activeBarColor = useToken('colors', 'white');
    const inactiveBarColor = useToken('colors', 'gray.400');
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((current) => (current === banners.length - 1 ? 0 : current + 1));
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    if (!isLargerThan992) {
        return null;
    }

    return (
        <VStack position="relative" mt="10vh">
            <MotionBox
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                w="100%"
                h="25vw"
                overflow="hidden">
                <img
                    src={banners[current]}
                    alt="Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </MotionBox>
            <HStack
                position="absolute"
                bottom={0}
                left="50%"
                transform="translateX(-50%)"
                spacing={1}
                p={2}
                bgColor="rgba(0, 0, 0, 0.5)"
                borderRadius="full">
                {banners.map((_, index) => (
                    <Box
                        key={index}
                        w={8}
                        h={1}
                        borderRadius="full"
                        bgColor={index === current ? activeBarColor : inactiveBarColor}
                        onClick={() => setCurrent(index)}
                        cursor="pointer"
                    />
                ))}
            </HStack>
        </VStack>
    );
};

export default Banner;
