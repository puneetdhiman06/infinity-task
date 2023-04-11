import React from 'react'
import Employee1 from '../Components/Employee1';
import Employee2 from '../Components/Employee2';

const Employee = () => {
  let userName = localStorage.getItem("userName"); 
  let userAdminOrNot=undefined;
  if(userName === "employee1") userAdminOrNot=1;


  return (
    <div mt={100}>
      {userAdminOrNot && <Employee1/>}
      {!userAdminOrNot && <Employee2/>}
    </div>
  )
}

export default Employee
