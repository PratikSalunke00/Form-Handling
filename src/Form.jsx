import { useState } from "react"

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
  });

  let handelInputChange = (event) => {
    let fieldName = event.target.name;
    let newvalue = event.target.value;

    setFormData( (currData) => {
      // currData[fieldName] = newvalue;
      return{...currData , [fieldName] : newvalue};
    })
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: ""
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <lable htmlFor="fullName">Full Name</lable>
        <input  placeholder = "enter your full name" type="text" value = {formData.fullName}  id="fullName"
        name="fieldName"
        onChange={handelInputChange}
        />

      <br/> <br/>
      <br/> <br />
        <lable htmlFor="userName">User Name</lable>
        <input  placeholder = "enter username" type="text" value = {formData.username} id="userName"
        name="username"
        onChange={handelInputChange}
        />

      <br/> <br/>
      <br/> <br />
        <lable htmlFor="password">Password</lable>
        <input  placeholder = "enter password" type="password" value = {formData.password} id="password"
        name="username"
        onChange={handelInputChange}
        />
        <button>Submit</button>
    </form>
  )
}