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
    useDisclosure,
    useMediaQuery,
} from '@chakra-ui/react';

import NavbarButtons from './NavbarButtons.jsx';
import NavbarLogo from './NavbarLogo.jsx';
import NavbarPages from './NavbarPages.jsx';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

    return (
        <Flex
            bg="brand.white"
            p={{ base: '2', lg: '4' }}
            w="100%"
            h={{ base: '10vh', lg: '11vh' }}
            position="fixed"
            top="0"
            zIndex="1000"
            boxShadow="0px 8px 12px 0px rgba(200, 202, 192, 0.30)"
            justifyContent="space-between"
            alignItems="center">
            <Box order={{ base: 1, lg: 2 }}>
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
            <Box order={{ base: 2, lg: 1 }} paddingLeft={{ base: 4, lg: 0 }}>
                <NavbarLogo />
            </Box>
            <Box order={{ base: 3, lg: 3 }}>
                <NavbarButtons />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement={{ base: 'left', md: 'top' }}
                onClose={onClose}
                size="full">
                <DrawerOverlay mt={{ base: '10vh', lg: '11vh' }}>
                    <DrawerContent mt={{ base: '10vh', lg: '11vh' }}>
                        <DrawerCloseButton />
                        <DrawerHeader bg=" #FEFFF6 "></DrawerHeader>
                        <DrawerBody bg="linear-gradient(180deg, #FEFFF6 0%, #FEFFF6 48.27%, #DFE3CB 100%)">
                            <NavbarPages />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Flex>
    );
};

export default Navbar;
