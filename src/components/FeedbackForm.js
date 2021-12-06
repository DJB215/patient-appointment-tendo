import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import data from '../data/patient-feedback.json';
import Diagnosis from './Diagnosis';
import Feelings from './Feelings';
import Recommend from './Recommend';
import ThankYou from './ThankYou';

// Gatekeeper component for all other components
const FeedbackForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [rating, setRating] = useState(0);
    const [diagnosis, setDiagnosis] = useState('');
    const [feelings, setFeelings] = useState('');

    const MySwal = withReactContent(Swal);

    const steps = ['Would You Recommend', 'Did You Understand', 'How Do You Feel', 'Thank You'];

    const patientFN = data.entry[0].resource.name[0].given[0];
    const doctorLN = data.entry[1].resource.name[0].family;
    const ailment = data.entry[3].resource.code.coding[0].name;

    // Functions for Recommend Component
    const handleNextRecommend = (e) => {
        e.preventDefault();
        setActiveStep(activeStep + 1);
    }

    const handleSliderChange = (e, data) => {
        setRating(data);
    }

    // Functions for Diagnosis Component
    const handleNextDiagnosis = (e) => {
        e.preventDefault();
        
        if (diagnosis === '') {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must enter either Yes or No!'
            })
        } else {
            setActiveStep(activeStep + 1)
        }
    }

    const handleDiagChange = (e) => {
        setDiagnosis(e.target.value)
    }

    
    // Submit form on Feelings Component
    const handleSubmit = (e) => {
        e.preventDefault();

        setFeelings(document.getElementById('Feelings').value);

        if (document.getElementById('Feelings').value === '') {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `You must let us know how you feel about being diagnosed with ${ailment}`
            })
        } else {
            setActiveStep(activeStep + 1);
        }
    }

    
    // Handler for Back button
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    // Switch statement to handle the component presented based on active step
    switch (activeStep) {
        case 0:
            return (
                // Props passed to Recommend coomponent
                // (Patient First Name, Doctor Last Name, steps array, Active Step and handler functions)
                <Recommend
                    patientFN={patientFN}
                    doctorLN={doctorLN}
                    handleNext={handleNextRecommend}
                    handleChange={handleSliderChange}
                    steps={steps}
                    activeStep={activeStep}
                />
            );
        case 1:
            return (
                // Props passed to Diagnosis coomponent
                // Patient Diagnosis, Doctor Last Name, steps array, Active Step and handler functions
                <Diagnosis
                    ailment={ailment}
                    doctorLN={doctorLN}
                    handleBack={handleBack}
                    diagnosis={diagnosis}
                    handleNext={handleNextDiagnosis}
                    handleChange={handleDiagChange}
                    steps={steps}
                    activeStep={activeStep}
                />
            );
        case 2:
            return (
                // Props passed to Feelings coomponent
                // Patient Diagnosis, steps array, Active Step and handler functions
                <Feelings
                    ailment={ailment}
                    handleBack={handleBack}
                    handleSubmit={handleSubmit}
                    steps={steps}
                    activeStep={activeStep}
                />
            )
        case 3:
            return (
                // Props passed to ThankYou coomponent
                // Patient Diagnosis, Doctor Last Name, Responses to questions, steps array, Active Step and handler functions
                <ThankYou
                    ailment={ailment}
                    doctorLN={doctorLN}
                    rating={rating}
                    diagnosis={diagnosis}
                    feelings={feelings}
                    steps={steps}
                    activeStep={activeStep}
                />
            )
        default:
            throw new Error('Unknown step');
    }
}

export default FeedbackForm;
