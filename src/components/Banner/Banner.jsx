import { Box, HStack, VStack, useToken } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const banners = [
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689400111/wong-zihoo-DBtgQI-9XdM-unsplash_bikpot.jpg',
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689400111/dan-rogers-lMIvz5b1vRo-unsplash_mkfer4.jpg',
    'https://res.cloudinary.com/dhjlbf6xs/image/upload/v1689400111/kent-tupas-WaUcTYPfiCU-unsplash_qcdesy.jpg',
];

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const dotColor = useToken('colors', 'brand.black');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((current) => (current === banners.length - 1 ? 0 : current + 1));
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <VStack>
            <MotionBox
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                w="100vw"
                h="25vw"
                overflow="hidden">
                <img
                    src={banners[current]}
                    alt="Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </MotionBox>
            <HStack spacing={1}>
                {banners.map((_, index) => (
                    <Box
                        key={index}
                        w={2}
                        h={2}
                        borderRadius="full"
                        bgColor={dotColor}
                        opacity={index === current ? 1 : 0.5}
                    />
                ))}
            </HStack>
        </VStack>
    );
};

export default Banner;
