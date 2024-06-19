import React, { useState } from 'react';

const FormOne = ({ onSave, data }) => {
  const [emailId, setEmailId] = useState(data.emailId);
  const [password, setPassword] = useState(data.password);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[#?!@$%^&*-]){2}).{8,}$/;

    if (!emailId || !emailRegex.test(emailId)) {
      errors.emailId = 'Invalid email address';
    }
    if (!password || !passwordRegex.test(password)) {
      errors.password = 'Password must contain 2 uppercase, 2 lowercase, 2 numbers, and 2 special characters';
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors); 
    if (Object.keys(validationErrors).length === 0) {
      onSave({ emailId, password }); // Save data if no validation errors
    }
  };

  return (
    <div>
      <div>
        <label>Email ID</label>
        <input
          type="text"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.emailId && <p className="text-red-500">{errors.emailId}</p>}
      </div>
      <div className="relative">
        <label>Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-10 cursor-pointer"
        >
          {passwordVisible ? 'Close' : 'Open'}
        </span>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default FormOne;
