
import './App.css';
import Form from './Form'
import Member from './Member'
import React, { useState, useEffect } from 'react'


const initialFormValue = {
  name: '',
  email: '',
  role: '',
}


export default function App() {
  const [member, setMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValue)

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role) return

    setMember([newMember, ...member]);
    setFormValues(initialFormValue)
  }


  return (
    <div className="App">
      {member.map((members) => {
        return <Member key={members.name} details={members} />
      })}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}
