import React, { useState } from 'react'; 
import "./Contacts.css";

export default function Contacts() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFirstName('');
    setLastName('');
    setEmail('');
    setComment('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form className="form-contact" onSubmit={handleSubmit}> 
        <label>
          First Name:
          <input type="text" name="fname" id="fname" value={firstName} onChange={handleFirstNameChange} required/>
        </label>
        <label>
          Last Name:
          <input type="text" name="lname" id="lname" value={lastName} onChange={handleLastNameChange} required/>
        </label>
        <label>
          Email:
          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange}required/>
        </label>
        <label>
          Comment:
          <textarea id="comment" name="comment" rows="4" cols="50" value={comment} onChange={handleCommentChange}></textarea>
        </label>
        <button className="btn-contact" type="submit">Submit</button> 
      </form>
    </div>
  );
}