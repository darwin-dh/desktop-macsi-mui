// material-ui
import { Grid, Stack, Button } from '@mui/material';
import AuthLogin from "./auth-forms/AuthLogin"
import logoVertical from '../../assets/images/logos/logo-sistema.png'
import LogoApp from './Components/LogoApp';
import AppKeyboard from '../../components/AppKeyboard';
import MainCard from '../../components/MainCard';
const LoginCover = () => {
    return (
        <div style={{ background: '#f2f2f2' }}>
            <Grid
                item
                xs={12}
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 12px)' } }}
            >
                <Grid item xl={3} md={4} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <MainCard border={false} sx={{ border: "1px solid rgba(0,0,0,0.20)", boxShadow: '1px 3px 15px -5px rgba(0,0,0,0.40)' }} >
                        <Stack
                            alignItems={'center'}
                        >
                            <LogoApp
                                urlImg={logoVertical}
                            />
                            <AuthLogin />

                        </Stack>


                    </MainCard >

                </Grid>
                <Grid item xl={3} md={5} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <MainCard border={false} sx={{ border: "1px solid rgba(0,0,0,0.20)", boxShadow: '1px 3px 15px -5px rgba(0,0,0,0.40)' }} >
                        <Stack
                            direction="row"
                            spacing={0.5}
                            justifyContent="space-evenly"
                        >
                            <AppKeyboard />
                            <Button color='primary' variant='outlined' size='medium'>Enter</Button>
                        </Stack>
                    </MainCard>
                </Grid>
            </Grid>

        </div >
    )
}

export default LoginCover