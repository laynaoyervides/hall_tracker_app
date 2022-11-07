import React from "react";
import {Card, CardMedia, CardContent, CardActions, Accordion, Typography, Button} from "@mui/material"


function LearnerActivity({name}){
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
            sx={{backgroundColor:"geen"}}>
            OUT
            </Button>
            <Button>IN</Button>
            
            </CardActions>
            </Card>
        </>
        
    )
}

export default LearnerActivity