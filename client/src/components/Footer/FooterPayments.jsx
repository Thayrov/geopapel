import { Grid, GridItem, Image, Text } from '@chakra-ui/react';

import dataFiscal from '../../assets/dataFiscal.svg';
import payments from '../../assets/payments.svg';
import paymentsSmall from '../../assets/payments_small.svg';

const FooterPayments = () => {
    return (
        <div>
            <Grid
                templateColumns={{ base: '1fr', md: ' 1fr', lg: 'repeat(2, 1fr)' }}
                mt={10}
                gap={0}
                ml={{ base: 10, lg: 40 }}
                mr={{ lg: 60 }}
                pb={{ base: 20, lg: 40 }}>
                <GridItem>
                    <Text fontWeight={600} fontSize={{ base: '22px', lg: '22px' }} mb={{ lg: 6 }}>
                        Medios de pago{' '}
                    </Text>
                    <Image
                        display={{ base: 'none', md: 'block', lg: 'block' }}
                        height={{ base: 20, lg: 10 }}
                        src={payments}
                        width={{ md: '90%', lg: '100%' }}></Image>
                    <Image
                        mt={4}
                        display={{ base: 'block', md: 'none', lg: 'none' }}
                        height={{ base: 24, lg: 10 }}
                        src={paymentsSmall}></Image>
                </GridItem>
                <GridItem mt={{ base: 6, lg: 10 }} ml={{ lg: 80 }}>
                    <Image height={{ base: 20, lg: 24 }} src={dataFiscal} />
                </GridItem>
            </Grid>
        </div>
    );
};

export default FooterPayments;
