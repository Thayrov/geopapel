import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';

import NosotrosImage from './NosotrosImage.jsx';
import NosotrosInfo from './NosotrosInfo.jsx';
import NosotrosSideBar from './NosotrosSideBar.jsx';

const Nosotros = () => {
    const columns = useBreakpointValue({ base: '1fr', lg: '2fr 2fr 1fr' });
    const sidebarSize = useBreakpointValue({ base: '31px', md: '36px', lg: '66px' });

    return (
        <Box position="relative">
            <Grid
                templateColumns={columns}
                gap={6}
                justifyContent="center"
                py={{ base: 10, lg: 40 }}>
                <NosotrosImage />
                <NosotrosInfo />
            </Grid>
            <NosotrosSideBar size={sidebarSize} />
        </Box>
    );
};

export default Nosotros;
