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
    Slider
} from '@material-ui/core';


const Recommend = (props) => {

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 7, md: 5 }, p: { xs: 5, md: 5 } }}>
                    <Typography component="h1" variant="h4" align="center">
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
                        <AppBar title="Would You Recommend?" />

                        <Typography component="p">Hi {props.patientFN}, on a scale of 1-10, would you recommend Dr. {props.doctorLN} to a friend or family member? (1 = Would not recommend, 10 = Would strongly recommend)</Typography>
                        
                        <Box sx={{ width: 400, marginTop: 40, marginBottom: 40, marginLeft: 80 }}>
                        <Slider
                            color="primary"
                            defaultValue={1}
                            onChangeCommitted={props.handleChange}
                            marks
                            min={1}
                            max={10}
                            valueLabelDisplay="on"
                            name="Rating"
                            id="Rating"
                            sx={{
                                justifyContent: "center"
                            }}
                        />
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {props.activeStep !== 0 && (
                                <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }} color="primary">
                                Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={props.handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {props.activeStep === props.steps.length - 1 ? 'Submit' : 'Next'}
                            </Button> 
                        </Box>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default Recommend