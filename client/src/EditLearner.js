import React, { useState } from "react";

function EditLearner ({learner, onUpdateLearner}){
    const {id, name}=learner;
    const [updatedName, setUpdatedName]=useState(name)

    const changeLearner ={
        name: updatedName
    }
    function handleEditForm(e) {
        e.preventDefault();

//PATCH to edit single learner
        fetch(`/learners/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(changeLearner),
          })
            .then((resp) => resp.json())
            .then((updatedLearner) => onUpdateLearner(updatedLearner));
        }
      

    return (

        <div>
            <form onSubmit={handleEditForm}>
          <label htmlFor="name">Learner Name:</label>
            <input
            id="name"
            type="text"
            name="name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input type="submit" value="Save" />
            </form>
            </div>
    )
}

export default EditLearner