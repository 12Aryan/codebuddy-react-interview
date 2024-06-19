import React, { useState } from 'react';

const FormThree = ({ onSave, data }) => {
  const [countryCode, setCountryCode] = useState(data.countryCode);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(data.acceptTermsAndCondition);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!countryCode || !['+91', '+1'].includes(countryCode)) {
      errors.countryCode = 'Please select a valid country code';
    }
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number should be a 10 digit numeric value';
    }
    if (!acceptTermsAndCondition) {
      errors.acceptTermsAndCondition = 'You must accept the terms and conditions';
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSave({ countryCode, phoneNumber, acceptTermsAndCondition });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div>
        <label>Country Code</label>
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p className="text-red-500">{errors.countryCode}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={acceptTermsAndCondition}
            onChange={(e) => setAcceptTermsAndCondition(e.target.checked)}
          />
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && <p className="text-red-500">{errors.acceptTermsAndCondition}</p>}
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default FormThree;
