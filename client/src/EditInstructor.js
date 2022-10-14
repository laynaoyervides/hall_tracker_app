import React, { useState } from "react";

function EditInstructor ({instructor, onUpdateInstructor}) {
    const {id, username} = instructor;
    const [updatedUsername, setUpdatedUsername] = useState(username);

    function handleEditForm(e) {
        e.preventDefault();

        // PATCH request

        fetch(`http://localhost:3000/instructors/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: updatedUsername}),
    })
            .then((resp)=> resp.json())
            .then((updatedInstructor)=>onUpdateInstructor(updatedInstructor));
    }

    return (
        <form onSubmit={handleEditForm}>
            <input id="name" type="text" name="name" value={updatedUsername}
            onChange={(e)=> setUpdatedUsername(e.target.value)} />
                  <input type="submit" value="Save" />

        </form>
    )
}
export default EditInstructor;