import React from 'react';

const Stepper = ({ steps, currentStep, goToStep }) => {
  return (
    <div className="flex justify-center mb-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
          onClick={() => goToStep(index)}
        >
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${index <= currentStep ? 'border-blue-600' : 'border-gray-400'} ${index === currentStep ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>
            {index + 1}
          </div>
          <div className="ml-2">{step}</div>
          {index < steps.length - 1 && <div className="w-8 border-t-2 border-gray-300 mx-4"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
