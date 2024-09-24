
import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';




const firebaseConfig = {
  apiKey: "AIzaSyDQDVgP6et5zgS8vZgtOpsgac49RZE9NVc",
  authDomain: "shoppingapp-b4f4b.firebaseapp.com",
  projectId: "shoppingapp-b4f4b",
  storageBucket: "shoppingapp-b4f4b.appspot.com",
  messagingSenderId: "364958092474",
  appId: "1:364958092474:web:cff6e244de80b7219d8683",
  databaseURL:"https://shoppingapp-b4f4b-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function CreateAccount () {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  
 
   const handleSubmit = (e) => {
     e.preventDefault();
     
     const usersRef = ref(database, 'users');
     
     push(usersRef, {
       name: name,
       email: email,
       password: password
     })
     .then(() => {
       alert("Data saved successfully!");
       setName('');
       setEmail('')
       setPassword('')
     
     })
     .catch((error) => {
       console.error("Error saving data: ", error);
     });
   }
 
   return (
         <form onSubmit={handleSubmit} action=''>
       <div>
         <label>Name:</label>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)} 
           placeholder="Enter your name" 
         />
       </div>
       <div>
         <label>Email:</label>
         <input
           type="email"
           value={email}
 
           onChange={(e) => setEmail(e.target.value)} 
           placeholder="Enter your Email" 
          
         />
       </div>
       <div>
         <label>Password:</label>
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)} 
           placeholder="Enter your Password" 
          
         />
       </div>
       <button type="submit">Submit</button>
     </form>
 
 
 
    
   );
 }



export default CreateAccount 