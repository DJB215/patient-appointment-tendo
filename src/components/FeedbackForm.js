import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import data from '../data/patient-feedback.json';
import Diagnosis from './Diagnosis';
import Feelings from './Feelings';
import Recommend from './Recommend';
import ThankYou from './ThankYou';


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

    const handleNextRecommend = (e) => {
        e.preventDefault();
        setActiveStep(activeStep + 1);
    }

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

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleSliderChange = (e, data) => {
        setRating(data);
    }

    const handleDiagChange = (e) => {
        setDiagnosis(e.target.value)
    }

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

    switch (activeStep) {
        case 0:
            return (
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

export default FeedbackForm
