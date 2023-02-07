import React, {useState} from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from "@mui/material"
import NewActivity from "./NewActivity";



function LearnerActivity({name, learner_id}){
    const [isClicked, setIsClicked]= useState(false);

console.log(isClicked)
    return(
        <>
        <Card sx={{borderRadius:"10px", marginTop:"8px"}}> 
        <CardMedia
                        components ="img"
                        height=""
                        image=""
                        alt="" >	
        </CardMedia>
        <CardContent>
                <Typography variant="h5">Name: {name}</Typography>
        </CardContent>
        <CardActions sx={{float:"right"}}>
            <Button 
            variant="contained" 
            sx={{backgroundColor:"green", color: '#ffffff'}}
            onClick={()=> setIsClicked((isClicked) => !isClicked)}
            >
                SIGN OUT
            </Button>
            <Button>IN</Button>
         
            </CardActions>
            {isClicked ? 
                (<NewActivity learner_id={learner_id}/>
                ) : 
                (<></>)
                }
            </Card>
        </>
        
    )
}

export default LearnerActivity