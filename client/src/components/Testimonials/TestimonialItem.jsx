import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const TestimonialItem = ({ testimonial }) => {
    const theme = useTheme();

    return (
        <Flex pt={20} position="relative" justifyContent="center" alignItems="center">
            <Box
                as="svg"
                width={{ base: '70vw', md: '55.99vw', lg: '44.79vw', xl: '32.65vw' }}
                height={{ base: '65vw', md: '51.43vw', lg: '41.15vw', xl: '30vw' }}
                viewBox="0 0 326 302"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M318.754 148.569C318.754 176.799 310.381 204.394 294.694 227.866C279.007 251.338 256.71 269.632 230.623 280.435C204.537 291.238 175.832 294.064 148.138 288.557C120.445 283.05 95.0069 269.456 75.0411 249.495C55.0753 229.534 41.4783 204.102 35.9698 176.415C30.4612 148.728 33.2884 120.029 44.0939 93.9487C54.8993 67.8681 73.1976 45.5767 96.675 29.8933C120.152 14.2099 147.754 5.83887 175.99 5.83887C213.853 5.83887 250.166 20.8765 276.939 47.6436C303.712 74.4108 318.754 110.715 318.754 148.569Z"
                    fill={theme.colors.brand.white}
                />
                <path
                    d="M300.714 158.582C300.714 186.811 292.341 214.407 276.654 237.879C260.967 261.351 238.67 279.645 212.583 290.448C186.497 301.25 157.792 304.077 130.098 298.57C102.405 293.062 76.9669 279.469 57.001 259.507C37.0352 239.546 23.4383 214.114 17.9297 186.427C12.4212 158.74 15.2484 130.042 26.0538 103.961C36.8592 77.8808 55.1576 55.5894 78.6349 39.906C102.112 24.2226 129.714 15.8516 157.95 15.8516C176.698 15.8516 195.262 19.5434 212.583 26.7163C229.904 33.8891 245.642 44.4026 258.899 57.6563C272.156 70.9101 282.672 86.6445 289.846 103.961C297.021 121.278 300.714 139.838 300.714 158.582Z"
                    fill={theme.colors.brand['light-green']}
                />
                <path
                    d="M288 144H286.008C285.547 106.649 270.385 70.9852 243.81 44.736C217.235 18.4868 181.386 3.76725 144.032 3.76725C106.679 3.76725 70.8304 18.4868 44.255 44.736C17.6796 70.9852 2.51843 106.649 2.05714 144H0C0 105.809 15.1714 69.1819 42.1766 42.1766C69.1819 15.1714 105.809 0 144 0C182.191 0 218.818 15.1714 245.823 42.1766C272.829 69.1819 288 105.809 288 144Z"
                    fill={theme.colors.brand['dark-green']}
                />
                <path
                    d="M176 302C136.226 301.958 98.0942 286.035 69.9722 257.725C41.8501 229.416 26.0358 191.033 26 151H28.0755C27.8337 170.706 31.481 190.263 38.8059 208.539C46.1307 226.815 56.9874 243.446 70.7464 257.466C84.5054 271.487 100.893 282.619 118.959 290.217C137.025 297.815 156.409 301.727 175.989 301.727C195.568 301.727 214.953 297.815 233.019 290.217C251.084 282.619 267.472 271.487 281.231 257.466C294.99 243.446 305.847 226.815 313.172 208.539C320.496 190.263 324.144 170.706 323.902 151H326C325.958 191.031 310.142 229.41 282.021 257.719C253.9 286.027 215.772 301.952 176 302Z"
                    fill={theme.colors.brand['dark-green']}
                />
            </Box>
            <Flex
                pt={{ base: '26vw', md: '15vw', lg: '8vw', xl: '9vw' }}
                position="absolute"
                top="50%"
                left="48%"
                transform="translate(-50%, -50%)"
                direction="column"
                alignItems="center"
                width={{ base: '61vw', md: '44vw', lg: '23vw', xl: '18vw' }}
                height={{ base: '80vw', md: '60vw', lg: '30vw', xl: '30vw' }}>
                <Text
                    color="#232323"
                    textAlign="center"
                    fontSize={{ base: '15px', md: '24px', lg: '17px', xl: '22px' }}
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight={{ base: '28px', md: '40px', lg: '34px', xl: '26px' }}>
                    {testimonial.user}
                </Text>
                <Box
                    maxW={{ base: '70%', lg: '100%' }}
                    maxH="70%"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="normal">
                    <Text
                        color="#232323"
                        textAlign="center"
                        fontSize={{ base: '14px', md: '22px', lg: '17px', xl: '20px' }}
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight={{ base: '15px', md: '24px', lg: '20px', xl: '22px' }}>
                        {testimonial.testimonial}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
};
TestimonialItem.propTypes = {
    testimonial: PropTypes.object.isRequired,
};

export default TestimonialItem;
