

import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQDVgP6et5zgS8vZgtOpsgac49RZE9NVc",
  authDomain: "shoppingapp-b4f4b.firebaseapp.com",
  projectId: "shoppingapp-b4f4b",
  storageBucket: "shoppingapp-b4f4b.appspot.com",
  messagingSenderId: "364958092474",
  appId: "1:364958092474:web:cff6e244de80b7219d8683",
  databaseURL: "https://shoppingapp-b4f4b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Regular expressions for validation
const usernameExp = /^[a-z0-9]{4,20}$/;
const phoneExp = /^[0-9]{10}$/;
const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

function CreateAccount() {
  // States for form fields
  const [creatName, setCreatName] = useState('');
  const [creatEmail, setCreatEmail] = useState('');
  const [creatNumber, setCreatNumber] = useState('');
  const [creatPssword, setCreatPssword] = useState('');
  const [creatConfirmPassword, setCreatConfirmPassword] = useState('');

  // States for error messages
  const [creatNameError, setCreatNameError] = useState('');
  const [creatEmailError, setCreatEmailError] = useState('');
  const [creatNumberError, setCreatNumberError] = useState('');
  const [creatPasswordError, setCreatPasswordError] = useState('');
  const [creatConfirmPasswordError, setCreatConfirmPasswordError] = useState('');

  // Validation functions
  const check = (value, regex, errorMsg, setError) => {
    if (regex.test(value)) {
      setError('');
      return true;
    } else {
      setError(errorMsg);
      return false;
    }
  };

  const check2 = (value1, value2, errorMsg, setError) => {
    if (value1 === value2) {
      setError('');
      return true;
    } else {
      setError(errorMsg);
      return false;
    }
  };

  // Handle form submission
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    // Perform validation checks
    const isNameValid = check(creatName, usernameExp, 'Only alphabets & numbers allowed. Range 4-20', setCreatNameError);
    const isEmailValid = check(creatEmail, emailExp, 'Enter a valid email address', setCreatEmailError);
    const isNumberValid = check(creatNumber, phoneExp, 'Only numbers allowed. Max 10 chars', setCreatNumberError);
    const isPasswordValid = check(creatPssword, passExp, 'Password must be 6-20 characters and include special characters', setCreatPasswordError);
    const isConfirmPasswordValid = check2(creatPssword, creatConfirmPassword, 'Confirm password must match password', setCreatConfirmPasswordError);

    // If all validations pass, push data to Firebase
    if (isNameValid && isEmailValid && isNumberValid && isPasswordValid && isConfirmPasswordValid) {
      const usersRef = ref(database, 'users');
      push(usersRef, {
        name: creatName,
        email: creatEmail,
        password: creatPssword,
        number: creatNumber
      })
        .then(() => {
          alert("Data saved successfully!");
          setCreatName('');
          setCreatEmail('');
          setCreatPssword('');
          setCreatNumber('');
          setCreatConfirmPassword('');
        })
        .catch((error) => {
          console.error("Error saving data: ", error);
        });
    }
  };

  return (
    <>
   
      <form onSubmit={handleSubmitBtn}>
      <div>
      <h2 className='heading1'>Create  Accout</h2>
        <label>Name:</label>
        <input
          type="text"
          
          value={creatName}
          onChange={(e) => setCreatName(e.target.value)}
          placeholder="Enter your name"
        />
        <div style={{ color: 'red' }}>{creatNameError}</div>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={creatEmail}
          onChange={(e) => setCreatEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <div style={{ color: 'red' }}>{creatEmailError}</div>
      </div>

      <div>
        <label>Number:</label>
        <input
          type="number"
          value={creatNumber}
          onChange={(e) => setCreatNumber(e.target.value)}
          placeholder="Enter your Number"
        />
        <div style={{ color: 'red' }}>{creatNumberError}</div>
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={creatPssword}
          onChange={(e) => setCreatPssword(e.target.value)}
          placeholder="Enter your Password"
        />
        <div style={{ color: 'red' }}>{creatPasswordError}</div>
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={creatConfirmPassword}
          onChange={(e) => setCreatConfirmPassword(e.target.value)}
          placeholder="Confirm your Password"
        />
        <div style={{ color: 'red' }}>{creatConfirmPasswordError}</div>
      </div>

      <button type="submit">Submit</button>
    </form>

    </>

  );
}

export default CreateAccount;
