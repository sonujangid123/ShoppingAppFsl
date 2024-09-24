
// import React, { useState } from 'react';
// import { getDatabase, ref, push } from 'firebase/database';
// import { initializeApp } from 'firebase/app';




// const firebaseConfig = {
//   apiKey: "AIzaSyDQDVgP6et5zgS8vZgtOpsgac49RZE9NVc",
//   authDomain: "shoppingapp-b4f4b.firebaseapp.com",
//   projectId: "shoppingapp-b4f4b",
//   storageBucket: "shoppingapp-b4f4b.appspot.com",
//   messagingSenderId: "364958092474",
//   appId: "1:364958092474:web:cff6e244de80b7219d8683",
//   databaseURL:"https://shoppingapp-b4f4b-default-rtdb.firebaseio.com/"
// };


// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);


// function Login() {
//     // const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
   
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       const usersRef = ref(database, 'users');
      
//       push(usersRef, {
//         // name: name,
//         email: email,
//         password: password
//       })
//       .then(() => {
//         alert("Data saved successfully!");
//         // setName('');
//         setEmail('')
//         setPassword('')
      
//       })
//       .catch((error) => {
//         console.error("Error saving data: ", error);
//       });
//     }
  
//     return (
//           <form onSubmit={handleSubmit} action=''>
//         {/* <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             // name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)} 
//             placeholder="Enter your name" 
//           />
//         </div> */}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             // name="email"
//             value={email}
  
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder="Enter your Email" 
           
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             // name="email"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder="Enter your Password" 
           
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
  
  
  
     
//     );
//   }







// export default Login








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
  databaseURL:"https://shoppingapp-b4f4b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Email and password validation regex
const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const isEmailValid = check(email, emailExp, 'Enter a valid email address', setEmailError);
    const isPasswordValid = check(password, passExp, 'Password must be 6-20 characters and include special characters', setPasswordError);
    const isConfirmPasswordValid = check2(password, confirmPassword, 'Confirm password must match password', setConfirmPasswordError);

    // If all validations pass, push data to Firebase
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      const usersRef = ref(database, 'users');
      push(usersRef, {
        email: email,
        password: password
      })
      .then(() => {
        alert("Data saved successfully!");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <div style={{ color: 'red' }}>{emailError}</div>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
        <div style={{ color: 'red' }}>{passwordError}</div>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your Password"
        />
        <div style={{ color: 'red' }}>{confirmPasswordError}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
