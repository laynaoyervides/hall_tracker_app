import React from "react"
import { Typography, Box } from "@mui/material"


function Home () {

    return (
        <div>
            <Box
            display ="flex" 
            flexDirection={'column'} 
            justifyContent={"center"}
            backgroundColor={"#ffffff"}
            margin="auto"
                    marginTop={20}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #000'}
            >
            <Typography sx={{marginTop:10, paddingLeft:10, paddingRight:10, textAlign:"center"}} variant="h1">
                Welcome to PassCheck App
            </Typography>
            <br></br>
            <Typography variant="h2" sx={{paddingLeft:10, paddingRight:10, textAlign:"center"}}>
                Quickly track student time out of class and collaborate across our school!

            </Typography>
            <br></br>

            
            </Box>

        </div>
    )
}
export default Home