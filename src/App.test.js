import React from 'react';
import App from './App';
import Diagnosis from './components/Diagnosis';
import FeedbackForm from './components/FeedbackForm';
import Feelings from './components/Feelings';
import Recommend from './components/Recommend';
import ThankYou from './components/ThankYou';
import { shallow } from 'enzyme';


const steps = ['Would You Recommend', 'Did You Understand', 'How Do You Feel', 'Thank You'];


describe("rendering components (Unit Testing)", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders FeedbackForm component without crashing", () => {
    shallow(<FeedbackForm />);
  });
  it("renders Recommend component with props without crashing", () => {
    shallow(<Recommend steps={steps}/>);
  });
  it("renders Diagnosis component with props without crashing", () => {
    shallow(<Diagnosis steps={steps}/>);
  });
  it("renders Feelings component with props without crashing", () => {
    shallow(<Feelings steps={steps}/>);
  });
  it("renders ThankYou component with props without crashing", () => {
    shallow(<ThankYou steps={steps}/>);
  });
})
