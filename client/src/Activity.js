import React from "react";
import {Box, Typography} from "@mui/material"

function Activity () {
    return (
        <div>
            <Box                     
               marginTop={15}
               padding={15}
               
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#82f7ff"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
        
        <Typography variant="h1" textAlign="center">Activity</Typography>
        <Typography variant="h2" textAlign="center">Choose your course to start tracking activity</Typography>



        </Box> 
        </div>
    )
}
export default Activity;