import React from "react"
import { Typography, Button, Box } from "@mui/material"

function Home () {
    return (
        <div>
            <Box
            display ="flex" 
            flexDirection={'column'} 
            justifyContent={"center"}
            margin="auto"
                    marginTop={10}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
            >
            <Typography sx={{marginTop:10, paddingLeft:10, paddingRight:10, textAlign:"center"}} variant="h1">
                Welcome to PassCheck App
            </Typography>
            <br></br>
            <Typography variant="h2" sx={{paddingLeft:10, paddingRight:10, textAlign:"center"}}>
                Quickly track student time out of class and collaborate across our school!

            </Typography>
            <br></br>

            
            <Button 
                variant="contained" 
                color="secondary"
                sx={{ marginTop:3, borderRadius: 3}}
                
                >
                <Typography variant="h1" >
                Sign-up
                </Typography>
            </Button>
            </Box>

        </div>
    )
}
export default Home