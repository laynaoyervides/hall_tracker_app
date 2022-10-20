import React, {useState} from 'react'
import EditLearner from "./EditLearner"

function LearnerDetail ({learner, deleteLearner, onUpdateLearner}) {
    const{id, name } = learner;
    const [isEditing, setIsEditing]= useState(false);
    
    function handleDelete () {
        deleteLearner(id);
        fetch("http://localhost:3000/deleteLearner" , {
            method: "DELETE",
        });
    };
    const handleLearnerUpdate = (updatedLearner) => {
        setIsEditing(false);
        onUpdateLearner(updatedLearner);
      };


    return(
        <div>
                { isEditing ? (
                <EditLearner learner={learner} onUpdateLearner={handleLearnerUpdate}/>
                ) :
                (<h3>Learner Name:{name}<br></br></h3>)
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
                <button onClick={handleDelete}><h5>DELETE</h5></button>

        </div>
    )
}
export default LearnerDetail