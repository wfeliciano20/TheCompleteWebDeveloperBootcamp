import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name:inputName, value:updatedValue } = event.target;

    setContact((previousContact) => {
      if(inputName === fName){
        return{
          fname: updatedValue,
          lName: previousContact.lName,
          email: previousContact.email
        };
      } else if(inputName === lname){
        return {
          fname: previousContact.fName,
          lName: updatedValue,
          email: previousContact.email
        };
      } else{
        return {
          fname: previousContact.fName,
          lName: previousContact.lName,
          email:updatedValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
