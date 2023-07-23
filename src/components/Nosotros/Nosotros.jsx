import { Box, Grid } from '@chakra-ui/react';

import NosotrosImage from './NosotrosImage.jsx';
import NosotrosInfo from './NosotrosInfo.jsx';
import NosotrosSideBar from './NosotrosSideBar.jsx';

const Nosotros = () => {
    return (
        <Box position="relative">
            <Grid
                templateColumns={{ base: '1fr', lg: '2fr 2fr 1fr' }}
                gap={2}
                justifyContent="center"
                py={{ base: 10, lg: 40 }}>
                <NosotrosImage />
                <NosotrosInfo />
            </Grid>
            <NosotrosSideBar />
        </Box>
    );
};

export default Nosotros;
