import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const url = `${import.meta.env.VITE_URL}/#newsletter`;
    const alert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Te suscribiste a nuestro Newsletter!',
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return (
        <Box
            as="section"
            mt={{ base: 10, lg: 20 }}
            minHeight={{ base: '400px', lg: '450px' }}
            backgroundColor="brand.dark-green"
            color="white"
            pt={20}>
            <Flex direction="column" alignItems="center">
                <Text fontSize={{ base: '20px', lg: '24px' }}>Newsletter</Text>
                <Text
                    fontSize={{ base: '24px', lg: '24px' }}
                    fontWeight={600}
                    pt={{ base: 2, lg: 2 }}>
                    Recibí todas las ofertas
                </Text>
                <Text
                    p={6}
                    width="90%"
                    fontSize={{ base: '14px', lg: '20px' }}
                    textAlign="center"
                    pt={{ base: 4, lg: 8 }}>
                    Querés recibir todas nuestras ofertas? Regístrate ya mismo y comenzá a
                    disfrutarlas!
                </Text>

                <Stack>
                    <form
                        action="https://formsubmit.co/hola@geopapel.com.ar"
                        method="POST"
                        onSubmit={alert}>
                        <input type="hidden" name="_next" value={url} />
                        <input type="hidden" name="_captcha" value="false" />

                        <InputGroup
                            variant="custom"
                            width={{ base: '80vw', lg: '50vw' }}
                            backgroundColor="#FEFFF6"
                            p={4}
                            borderRadius="20px 20px 20px 20px">
                            <Input
                                type="email"
                                name="email for newsletter"
                                class="form-control"
                                required
                                placeholder="Email"
                                fontWeight={600}
                                fontSize={20}
                                size="lg"
                                color="brand.dark-green"
                                borderColor="#FEFFF6"
                                backgroundColor="#FEFFF6"
                                _hover={{ borderColor: '#FEFFF6' }}
                                _placeholder={{
                                    color: 'brand.dark-green',
                                }}
                            />
                            <InputRightElement m={5} color="brand.dark-green">
                                <Button
                                    variant="ghost"
                                    backgroundColor="#FEFFF6"
                                    _hover={{ borderColor: '#FEFFF6' }}
                                    _focus={{
                                        bg: 'white',
                                        outlineColor: 'transparent',
                                    }}
                                    type="submit">
                                    <ArrowForwardIcon color="#7B8B28" boxSize={40} />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </form>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Newsletter;
