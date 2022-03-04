import React from 'react'

import { useEffect, useState } from "react";

export default function Login() {
  const [userForm, setUserForm] = useState({
    useremail: "",
    password: "",
  });
  const [userFormErrors, setUserFormError] = useState({
    useremailErr: null,
    passwordErr: null,
  });

  useEffect(() => {
    console.log(userForm);
  }, [userForm]);

  
  const handleFormChange = (e) => {
    if (e.target.name === "useremail") {
      setUserForm({
        ...userForm,
        useremail: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        useremailErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Min. Length is 3 characters"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        passwordErr:
        e.target.value.length===0
        ?"this filed is requird"
        :e.target.value.length<8
        ?"must be 8 char" 
        : null
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };

  return (
    <div>
      <h2 className="text-center">login</h2>
      <div className='w-75 m-auto'>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="useremail" className="form-label">
           Useremail
          </label>
          <input
            type="text"
            className={`form-control ${
              userFormErrors.usernameErr ? "border-danger" : ""
            }`}
            name="useremail"
            aria-describedby="usernameHelp"
            value={userForm.useremail}
            onChange={(e) => handleFormChange(e)}
          />
          <div id="usernameHelp" className="text-danger form-text">
            {userFormErrors.useremailErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          Password
          </label>
          <input
            type="number"
            className="form-control"
            name="password"
            value={userForm.password}
            aria-describedby="ageHelp"
            onChange={(e) => handleFormChange(e)}
          />
          <div id="ageHelp" className="text-danger form-text">
            {userFormErrors.passwordErr}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}