import React from 'react';
import {
    CssBaseline,
    AppBar,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    createTheme,
    ThemeProvider,
} from '@material-ui/core';
import '../App.css';


const ThankYou = (props) => {
    const theme = createTheme();

    const url = 'https://24kxgiom1f.execute-api.us-east-1.amazonaws.com/production/';

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify({
            'recommendRating': props.rating,
            'howToManageDiag': props.diagnosis,
            'feelings': props.feelings
        })
    })
        .then(response => console.log(response))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md:3 } }}>
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

                        <Typography component="h3" className="feedbackText">Thanks again! Here's what we heard:<br />**BTW, we saved this to the database already**</Typography>
                        <br /><br />
                        <Typography component="span">
                        We asked: On a scale of 1-10, would you recommend Dr. {props.doctorLN} to a friend or family member? (1 = Would not recommend, 10 = Would strongly recommend)<br />
                        You answered: <strong>{props.rating}</strong>
                        </Typography>
                        <br /><br />
                        <Typography component="span">
                        We asked: Did Dr. {props.doctorLN} explain how to manage this diagnosis in a way you could understand?<br />
                        You answered: <strong>{props.diagnosis}</strong>
                        </Typography>
                        <br /><br />
                        <Typography component="span">
                        We asked: How do you feel about being diagnosed with {props.ailment}<br />
                        You answered: <strong>{props.feelings}</strong>
                        </Typography>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default ThankYou
