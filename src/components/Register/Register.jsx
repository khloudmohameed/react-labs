import { useEffect, useState } from "react";

export default function Register(){
  const emailPattern= new RegExp("^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$")
  const passPattern=new  RegExp("('^[a-z][0-9]{3}$')")
 const [userForm,setUserForm]=useState({
   username:"",
   useremail:"",
   passowrd:"",
   confiPassword:""
 });
 useEffect(() => {
  console.log(userForm);
}, [userForm]);


 const [userFormErrors, setUserFormError] = useState({
    usernameErr:null,
    useremailErr: null,
    passowrdErr: null,
    confiPasswordErr:null
});
const handleFormSubmit= (e)=>{
  e.preventDefault();
  
}
const handelFormChange=(e)=>{
   if(e.target.name==="username"){
    setUserForm({
      ...userForm,
      username:e.target.value,
    });
    setUserFormError({
      ...userFormErrors,
      usernameErr:
       e.target.value.length===0
       ?"this filed is requird" 
       : null
    })
  }
 
    else if(e.target.name==="useremail"){
      setUserForm({
        ...userForm,
        useremail:e.target.value,
      });
      setUserFormError({
        ...userFormErrors,
        useremailErr:
         e.target.value.length===0
         ?"this filed is requird"
         :!emailPattern.test(e.target.value) 
         ?"email not valid" 
         : null
      })
    }
    else if(e.target.name===" passowrd"){
      setUserForm({
        ...userForm,
        passowrd:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        passowrdErr:
         e.target.value.length===0
         ?"this filed is requird"
         :!passPattern.test(e.target.value) 
         ?"password not vaild" 
         : null
      })
    }
    else if(e.target.name==="confiPassword"){
      setUserForm({
        ...userForm,
        confiPassword:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        confiPasswordErr:
         e.target.value !=userForm.passowrd
         ?"password not match"
         : null
      })
    }
}
  return (
<div  className='w-75 m-auto'>
    <h1 className='text-center'>Register</h1>
    <form onSubmit={(e) => handleFormSubmit(e)}>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className={`form-control ${
          userFormErrors.usernameErr ? "border-danger" : ""
        }`}
        name="username"
        aria-describedby="usernameHelp"
        value={userForm.username}
        onChange={(e) =>handelFormChange(e)}
      />
      <div id="usernameHelp" className="text-danger form-text">
        {userFormErrors.usernameErr}
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor=" useremail" className="form-label">
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
        onChange={(e) =>handelFormChange(e)}
      />
      <div id="usernameHelp" className="text-danger form-text">
        {userFormErrors.useremailErr}
      </div>
    </div>
    <div className="mb-3">
          <label htmlFor="  passowrd" className="form-label">
          Password
          </label>
          <input
            type="number"
            className="form-control"
            name="  passowrd"
            value={userForm.  passowrd}
            aria-describedby="ageHelp"
            onChange={(e) =>handelFormChange(e)}
          />
          <div id="ageHelp" className="text-danger form-text">
            {userFormErrors.  passowrdErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="confiPassword" className="form-label">
          ConfiPassword
          </label>
          <input
            type="number"
            className="form-control"
            name="confiPassword"
            value={userForm.confiPassword}
            aria-describedby="ageHelp"
            onChange={(e) =>handelFormChange(e)}
          />
          <div id="ageHelp" className="text-danger form-text">
            {userFormErrors.confiPasswordErr}
          </div>
        </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>
  );
}
