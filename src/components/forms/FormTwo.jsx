import React, { useState } from 'react';

const FormTwo = ({ onSave, data }) => {
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [address, setAddress] = useState(data.address);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z]+$/;

    if (!firstName || firstName.length < 2 || firstName.length > 50 || !nameRegex.test(firstName)) {
      errors.firstName = 'First name should be 2-50 characters long and contain only alphabets';
    }
    if (lastName && !nameRegex.test(lastName)) {
      errors.lastName = 'Last name should contain only alphabets';
    }
    if (!address || address.length < 10) {
      errors.address = 'Address should be at least 10 characters long';
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors); // Update the errors state with the latest validation results
    if (Object.keys(validationErrors).length === 0) {
      onSave({ firstName, lastName, address });
    }
  };

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default FormTwo;
