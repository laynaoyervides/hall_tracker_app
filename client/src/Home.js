import React from "react"
import { Typography } from "@mui/material"
import { textAlign } from "@mui/system"

function Home () {
    return (
        <div>
            
            <Typography sx={{marginTop:50, paddingLeft:10, paddingRight:10, textAlign:"center"}} variant="h1">
                Welcome to PassCheck App
            </Typography>
            <br></br>
            <Typography variant="h2" sx={{paddingLeft:10, paddingRight:10, textAlign:"center"}}>
                Quickly track student time out of class and collaborate across our school!

            </Typography>

        </div>
    )
}
export default Home