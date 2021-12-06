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
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core'

const Diagnosis = (props) => {

    const theme = createTheme();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
                <Paper varient="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md:3 } }}>
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
                        <AppBar title="Question 1" />

                        <p>Thank you. You were diagnosed with {props.ailment}. Did Dr. {props.doctorLN} explain how to manage this diagnosis in a way you could understand?</p>
                        <br />

                        <FormControl style={{ width: '50%', marginBottom: 40 }} >
                            <InputLabel id="M">Manage diagnosis</InputLabel>
                            <Select
                            labelId="Manage Diagnosis"
                            id="HowToManage"
                            name="HowToManage"
                            value={props.diagnosis}
                            onChange={props.handleChange}
                            label="Manage Diagnosis"
                            fullWidth
                            >
                                <MenuItem value={'Yes'}>Yes</MenuItem>
                                <MenuItem value={'No'}>No</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {props.activeStep !== 0 && (
                                <Button color="primary" onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={props.handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {props.activeStep === props.steps.length - 2 ? 'Submit' : 'Next'}
                            </Button> 
                        </Box>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
      )
}

export default Diagnosis