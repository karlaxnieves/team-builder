
import './App.css';
import React, { useState, useEffect } from "react";
import Form from './Form'
import Member from './Member'


const initialFormValues = {
  name: "",
  email: "",
  role: "",
};


export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);


  const updateForm = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }


  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };


    if (!newMember.name || !newMember.email || !newMember.role) return;

    setTeamMembers([newMember, ...teamMembers]);
    setFormValues(initialFormValues);

  }


  return (
    <div className="App">

      {teamMembers.map((member) => {
        return <Member key={member.name} details={member} />
      })}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

    </div>
  );


}



