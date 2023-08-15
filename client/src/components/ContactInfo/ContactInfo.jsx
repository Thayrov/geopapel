import { Box } from '@chakra-ui/react';

const ContactInfo = () => {
    return (
        <section>
            <h1>Contact Info</h1>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                    width={{ base: '90vw', lg: '80vw' }}
                    height={{ base: '80vw', lg: '20vw' }}
                    borderRadius="20px"
                    boxShadow="0 0 0 2px transparent"
                    overflow="hidden">
                    <iframe
                        title="Acceso a ubicación de Google Maps de Geo Papel"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.5130029868246!2d-58.5497199233469!3d-34.4898765514966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb073ddfae825%3A0xc54b35df458cc8b2!2sDomingo%20Savio%202919%2C%20B1642FUE%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2smx!4v1692051109378!5m2!1sen!2smx"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Box>
        </section>
    );
};

export default ContactInfo;
