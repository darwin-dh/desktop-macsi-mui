import { Button, Grid } from '@mui/material';

const AppKeyboard = () => {
    const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (


        < >
            <Grid container spacing={2}>
                {listNumbers.map((number, index) => (
                    <Grid item xs={4} key={index}>
                        <Button
                            type="button"
                            variant="contained"
                            color='inherit'
                            sx={{
                                height: 70,
                                background: '#fff',
                                color: '#000',
                                fontSize: '1.3rem'
                            }}
                        >
                            {number}
                        </Button>
                    </Grid>
                ))}
                <Grid item xs={7} >
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="error"
                        sx={{ height: '100%' }}
                    >
                        Borrar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AppKeyboard