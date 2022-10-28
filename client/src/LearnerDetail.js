import React, {useState} from 'react'
import EditLearner from "./EditLearner"
import {Button, Typography, Box} from "@mui/material"

function LearnerDetail ({learner, onUpdateLearner}) {
    const{ name } = learner;
    const [isEditing, setIsEditing]= useState(false);
    const [learners, setLearners] =useState([]);

    function handleDelete (id) {
//        deleteLearner(id);
        fetch(`/learners/${id}` , {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                setLearners(learners.filter((learner)=> learner.id !==id));
            }
        })
        .catch((err)=> console.log(err));

    }

    const handleLearnerUpdate = (updatedLearner) => {
        setIsEditing(false);
        onUpdateLearner(updatedLearner);
      };


    return(
        <div>
            <Box 
            display={"flex"}

        >

                { isEditing ? (
                <EditLearner learner={learner} onUpdateLearner={handleLearnerUpdate}/>
                ) :
                (<Typography variant='h6'sx={{padding:"15px"}}>{name}</Typography>)
    
            }
            <Button variant="outlined" onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></Button>
                <Button onClick={handleDelete}><h5>DELETE</h5></Button>
                </Box>

        </div>
    )
}
export default LearnerDetail