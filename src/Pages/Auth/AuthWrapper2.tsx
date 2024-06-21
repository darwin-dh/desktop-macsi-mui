import { ReactNode } from 'react';

// material-ui
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project-imports
import AuthCard from './AuthCard';
import AppKeyboard from '../../components/AppKeyboard';

// assets

interface Props {
    children: ReactNode;
}

const AuthWrapper2 = ({ children }: Props) => {
    const theme = useTheme();
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    background: theme.palette.background.paper
                }}
            >
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                    >
                        <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <AuthCard border={true}>{children}</AuthCard>
                        </Grid>
                        <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <AppKeyboard />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuthWrapper2;
