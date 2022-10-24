import React, {useState} from "react";
import { Typography, Box, Button } from "@mui/material";

import Login from "./Login.js"
import SignUp from "./SignUp.js"

function Landing ({onLogin}){

    const [showLogin, setShowLogin] = useState(true);

    return (
       <div>
       <Box>
                <Typography>Hall Pass App</Typography> 
               {showLogin ? (
                    <>
                    <Login onLogin={onLogin}/>
                    <hr></hr>
                    <p>
                        Need an account?
                        <Button color="secondary" onClick={() => setShowLogin(false)}>
                         Sign Up
                     </Button>
                    </p>
                    </>
                    
                ) : (
                    <>
                    <SignUp onLogin={onLogin} />
                    <p>
                        Already have an account?
                        <Button color="secondary" onClick={() => setShowLogin(true)}>
                         Log In
                        </Button>

                    </p>
                    </>
                )
                }
               </Box>
               </div>
    )
}

export default Landing