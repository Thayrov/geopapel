import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    useBreakpointValue,
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';

import NavbarButtons from './NavbarButtons.jsx';
import NavbarLogo from './NavbarLogo.jsx';
import NavbarPages from './NavbarPages.jsx';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

    const justifyContent = 'space-between';
    const logoOrder = useBreakpointValue({ base: 2, lg: 1 });
    const pagesOrder = useBreakpointValue({ base: 1, lg: 2 });
    const buttonsOrder = useBreakpointValue({ base: 3, lg: 3 });
    const padding = useBreakpointValue({ base: 2, lg: 4 });
    const paddingLeft = useBreakpointValue({ base: 16, lg: 0 });
    const placement = useBreakpointValue({ base: 'left', md: 'top' });

    return (
        <Box bg="brand.white" p={padding} w="100vw">
            <Flex justifyContent={justifyContent} alignItems="center">
                <Box order={pagesOrder}>
                    {isLargerThan992 ? (
                        <NavbarPages />
                    ) : (
                        <IconButton
                            onClick={onOpen}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="31"
                                    viewBox="0 0 39 31"
                                    fill="none">
                                    <path
                                        d="M5 6.71631H34.8507M5 15.9558H34.8507M5 25.1954H34.8507"
                                        stroke="#414141"
                                        strokeWidth="3"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            }
                        />
                    )}
                </Box>
                <Box order={logoOrder} paddingLeft={paddingLeft}>
                    <NavbarLogo />
                </Box>
                <Box order={buttonsOrder}>
                    <NavbarButtons />
                </Box>
            </Flex>
            <Drawer isOpen={isOpen} placement={placement} onClose={onClose} size="full">
                <DrawerOverlay mt={'9vh'}>
                    <DrawerContent mt={'9vh'}>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                            <NavbarPages />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

export default Navbar;
