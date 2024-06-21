import {
    Button,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack
} from '@mui/material';
const AuthLogin = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={1} alignItems={'center'}>
                        <InputLabel htmlFor="email-login" >Nombre de Usuario</InputLabel>
                        <OutlinedInput
                            id="email-login"
                            type="email"
                            name="email"
                            fullWidth
                            size='small'
                        />

                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1} alignItems={'center'}>
                        <InputLabel htmlFor="password-login">Contraseña</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="-password-login"
                            type={'password'}
                            name="password"
                            size='small'
                        />

                    </Stack>
                </Grid>



                <Grid item xs={12}>
                    <Button disableElevation disabled={false} fullWidth size="large" type="submit" variant="contained" color="primary">
                        Aceptar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AuthLogin