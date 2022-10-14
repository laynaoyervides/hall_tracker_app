

import React, { useState } from "react";
import EditInstructor from "./EditInstructor";

function InstructorDetail ({instructorName, deleteInstructor, instructor, onUpdateInstructor }) {
  const {username, id} = instructor;
  const [isEditing, setIsEditing] =useState(false);

  function handleDelete () {
    deleteInstructor(id);
    fetch(`http://localhost:3000/instructors/${id}`, {
      method: "DELETE",
    });
  };

  /* function handleDeleteInstructor() {
        fetch(`http://localhost:9292/instructors/${instructor.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((deletedInstructor) => deleteInstructor(deletedInstructor));
    } */
    /* function onEditInstructor() {
        fetch (`http://localhost:9292/instructors/${instructor.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: instructor,
              }),
            })
              .then((r) => r.json())
              .then((updatedName) => onUpdateInstructors(updatedName));
        }
    
  */

        const handleInstructorUpdate = (updatedInstructor) => {
          setIsEditing(false);
          onUpdateInstructor(updatedInstructor);
        };

    return (
            <div>
                { isEditing ?  (
                  <EditInstructor instructor={instructor} onUpdateInstructor={handleInstructorUpdate}/>
                ) :
                ( <h3>{username}</h3>)
}
                <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
                <button onClick={handleDelete}><h5>DELETE</h5></button>
            </div>
            
    );
}

export default InstructorDetail;