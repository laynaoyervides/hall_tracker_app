import React, { useState } from "react";

function EditInstructor ({instructor, onUpdateInstructor}) {
    const {id, name} = instructor;
    const [updatedName, setUpdatedName] = useState(name);

    function handleEditForm(e) {
        e.preventDefault();

        // PATCH request

        fetch(`http://localhost:9292/instructors/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: updatedName}),
    })
            .then((resp)=> resp.json())
            .then((updatedInstructor)=>onUpdateInstructor(updatedInstructor));
    }

    return (
        <form onSubmit={handleEditForm}>
            <input id="name" type="text" name="name" value={updatedName}
            onChange={(e)=> setUpdatedName(e.target.value)} />
                  <input type="submit" value="Save" />

        </form>
    )
}
export default EditInstructor;