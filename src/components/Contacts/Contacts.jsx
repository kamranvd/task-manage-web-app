import React from 'react';
import "./Contacts.css"

export default function Contacts() {
  return (
    <div>Contacts
        <form className="form-contact"> 
          <label>
              First Name: 
              <input type="text" name="fname" id="fname" required/>
          </label>
          <label>
              Last Name: 
              <input type="text" name="lname" id="lname" required/>
          </label>
          <label>
              Email: 
              <input type="email" name="email" id="email" required/>
          </label>
          <label>
              Comment: 
            <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
          </label>
          <button className="btn-contact" type="submit">Add</button>
        </form>
    </div>
  )
}
