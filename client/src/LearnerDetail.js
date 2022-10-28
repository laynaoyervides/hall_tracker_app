import React, {useState} from 'react'
import EditLearner from "./EditLearner"
import {Button, Typography, Box} from "@mui/material"

function LearnerDetail ({learner, onUpdateLearner, deleteLearner}) {
    const{ name } = learner;
    const [isEditing, setIsEditing]= useState(false);
    //const [learners, setLearners] =useState([]);

    

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
                <Button onClick={() => deleteLearner(learner.id)}><h5>DELETE</h5></Button>
                </Box>

        </div>
    )
}
export default LearnerDetail