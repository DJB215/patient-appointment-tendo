import React from 'react';
import {
    CssBaseline,
    AppBar,
    Box,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    createTheme,
    ThemeProvider,
    TextField
} from '@material-ui/core';

const Feelings = (props) => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md:3 } }}>
                    <Typography component="h1" variant="h5">
                    Patient Feedback Form
                    </Typography>

                    <Stepper activeStep={props.activeStep} sx={{ pt: 3, pb: 5}}>
                        {props.steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}    
                    </Stepper>
                    <React.Fragment>
                        <AppBar title="Question 3" />

                        <Typography component="p" >We appreciate the feedback, one last question: how do you feel about being diagnosed with {props.ailment}?</Typography>
                        <Box component="form" onSubmit={props.handleSubmit} id="feelingsForm" noValidate sx={{ mt: 4 }}>
                            <TextField id="Feelings" label="How Do You Feel" multiline rows={4} fullWidth margin="normal" variant="outlined" />
                            <Button
                            color="primary"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Submit
                            </Button>
                        </Box>
                    </React.Fragment>    
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default Feelings