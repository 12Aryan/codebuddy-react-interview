import React, { useState } from 'react';
import FormOne from '../forms/FormOne';
import FormTwo from '../forms/FormTwo';
import FormThree from '../forms/FormThree';
import FormNavigation from '../form-navigation/FormNavigation';
import Stepper from '../stepper/Stepper';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false
  });

  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSave = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async () => {
    const { acceptTermsAndCondition, ...dataToSubmit } = formData;
    const response = await fetch('https://codebuddy.review/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSubmit)
    });
    const result = await response.json();
    if (result.message === 'Success') {
      window.location.href = '/posts';
    }
  };

  const goToStep = (stepIndex) => {
    setStep(stepIndex + 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <FormOne onSave={handleNext} data={formData} />;
      case 2:
        return <FormTwo onSave={handleNext} onBack={handleBack} data={formData} />;
      case 3:
        return <FormThree onSave={handleSubmit} onBack={handleBack} data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Stepper steps={steps} currentStep={step - 1} goToStep={goToStep} />
      {renderForm()}
      <FormNavigation
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MultiStepForm;
