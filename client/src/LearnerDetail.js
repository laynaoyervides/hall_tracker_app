import React, {useState} from 'react'
import EditLearner from "./EditLearner"
import {Button, Typography, Box, Card, CardContent, CardActions} from "@mui/material"

function LearnerDetail ({learner, onUpdateLearner, deleteLearner}) {
    const{ name } = learner;
    const [isEditing, setIsEditing]= useState(false);

    

    const handleLearnerUpdate = (updatedLearner) => {
        setIsEditing(false);
        onUpdateLearner(updatedLearner);
      };


    return(
        <div>
            <Card sx={{width:"60%", padding:"20px", margin:"10px", borderRadius:"10px"}}>
            <Box 
            display={"inline"}

        >
            <CardContent>
                { isEditing ? (
                <EditLearner learner={learner} onUpdateLearner={handleLearnerUpdate}/>
                ) :
                (<Typography variant='h3'sx={{padding:"15px"}}>{name}</Typography>)
    
            }
            </CardContent>
            <br></br>
            <CardActions>
            <Button variant="outlined" onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></Button>
                <Button onClick={() => deleteLearner(learner.id)}><h5>DELETE</h5></Button>
                </CardActions>
                </Box>
                </Card>
        </div>
    )
}
export default LearnerDetail