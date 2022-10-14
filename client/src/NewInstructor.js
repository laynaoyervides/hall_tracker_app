import React, { useState } from "react";

function NewInstructor ({addNewInstructor}) {
    const [username, setUsername]=useState("")
    const newInstructor ={
        username
    }
    const configObj = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInstructor),
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Make a POST request to create a new instructor
        fetch("http://localhost:3000/instructors", configObj)
          .then((resp) => resp.json())
          .then((instructor) => {
            addNewInstructor(instructor);
          });
      };
    
    return(
        <div>
            <h3>+ ADD A NEW INSTRUCTOR </h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
        <input
          id="name"
          type="text"
          placeholder="type name here"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add Instructor</button>
      </form>

        </div>
    )
}
export default NewInstructor;