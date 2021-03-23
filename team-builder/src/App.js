
import './App.css';
import React, { useState, useEffect } from "react";
import Form from './Form'


const initialFormValues = {
  name: "",
  email: "",
  role: "",
};


export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);



  const [formValues, setFormValues] = useState(initialFormValues);


  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }


  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };


    if (!newMember.name || !newMember.email || !newMember.role) return;
  }


  return (
    <div className="containber">
      <h1>Team Member App</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

    </div>
  );
}


