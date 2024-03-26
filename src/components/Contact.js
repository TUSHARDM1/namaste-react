import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
const Contact = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>This is a functional component</p>
      <p>{loggedInUser}</p>
    </div>
  )
}

export default Contact;
