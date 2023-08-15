import { Box, Text, Input, Stack, InputRightElement, InputGroup, Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Newsletter = () => {
    return (
        <section>
            <Box
            mt={{base:10, lg:20}}
                minHeight={{ base: "400px", lg: "450px" }}
                backgroundColor="brand.dark-green"
                color="white"
                pt={20}
            >
                <Flex
                    direction="column"
                    alignItems="center">
                    <Text
                        fontSize={{ base: "20px", lg: "24px" }}>Newsletter</Text>
                    <Text
                        fontSize={{ base: "24px", lg: "24px" }}
                        fontWeight={600}
                        pt={{ base: 2, lg: 2 }}
                    >Recibí todas las ofertas

                    </Text>
                    <Text
                        p={6}
                        width="90%"
                        fontSize={{ base: "14px", lg: "20px" }}
                        textAlign="center"
                        pt={{ base: 4, lg: 8 }}>Queres recibir todas nuestras ofertas? Registrate ya mismo y comenzá a disfrutarlas!</Text>

                    <Stack>
                        <InputGroup
                            variant="custom"
                            width={{ base: "400px", lg: "700px" }}
                            backgroundColor="#FEFFF6"
                            p={4}
                            borderRadius="20px 20px 20px 20px">
                            <Input
                                placeholder='Email'
                                fontWeight={600}
                                fontSize={20}
                                size="lg"
                                color="brand.dark-green"
                                borderColor="#FEFFF6"
                                backgroundColor="#FEFFF6"
                                _hover={{ borderColor: "#FEFFF6" }}
                                _placeholder={{
                                    color: "brand.dark-green"
                                }} />
                            <InputRightElement m={6} color="brand.dark-green">

                                <Button
                                    variant="ghost"
                                    backgroundColor="#FEFFF6"
                                    _hover={{ borderColor: "#FEFFF6" }}
                                    _focus={{
                                        bg: 'white',
                                        outlineColor: "transparent"
                                    }}
                                    type="submit">
                                    <ArrowForwardIcon
                                        color="#7B8B28"
                                        boxSize={40} />
                                </Button>
                            </InputRightElement>


                        </InputGroup>
                    </Stack>
                </Flex>
            </Box>
        </section>
    );
};

export default Newsletter;
