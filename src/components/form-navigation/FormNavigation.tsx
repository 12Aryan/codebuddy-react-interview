import React from 'react';

const FormNavigation = ({ step, handleBack, handleNext, handleSubmit }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={handleBack}
        disabled={step === 1}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Back
      </button>
      {step < 3 ? (
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save and Next
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
