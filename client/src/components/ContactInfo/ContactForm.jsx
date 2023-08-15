import { Input, Textarea, Button,FormControl} from '@chakra-ui/react'; 


const ContactForm = () => {
    return <div>
        <FormControl
        mt={10}> 
            <Input
            variant="custom"
            type="nombre"
            placeholder='Nombre'
            borderColor="brand.dark-green"
            borderWidth={2}
            backgroundColor="rgba(123, 139, 40, 0.1)"
            p={8}
            borderRadius={"20px 20px 20px 20px"}
            />

            <Input
            variant="custom"
            type="email"
            placeholder='Email'
            mt={{base:4, lg:6}}
            borderColor="brand.dark-green"
            borderWidth={2}
            backgroundColor="rgba(123, 139, 40, 0.1)"
            p={8}
            borderRadius={"20px 20px 20px 20px"}
            />

            <Textarea
            variant="custom"
            type="mensaje"
            placeholder='Tu mensaje...'
            mt={{base:4, lg:6}}
            size="lg"
            resize="vertical"
            height={{base:"180px",lg:"180px"}}
            borderColor="brand.dark-green"
            borderWidth={2}
            backgroundColor="rgba(123, 139, 40, 0.1)"
            p={8}
            borderRadius={"20px 20px 20px 20px"}
            />

            <Button 
            type="submit"
            width="100%" 
            height={{base:10, lg:"60px"}}
            borderRadius="20px 20px 20px 20px"
            backgroundColor="brand.dark-green"
            mt={{base:4, lg:6}}
            color="brand.white"
            box-shadow="2px 2px 8px 0px rgba(101, 101, 101, 0.25)"
            _hover={{ bg: 'brand.black' }}
            _focus={{outlineColor: "transparent"}}
            > Enviar </Button>
        </FormControl>
    </div>;
};

export default ContactForm;
