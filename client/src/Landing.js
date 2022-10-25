import React, {useState} from "react";
import { Typography, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { lightBlue, yellow } from "material-ui-colors";

import Login from "./Login.js"
import SignUp from "./SignUp.js"

function Landing ({onLogin}){

    const [showLogin, setShowLogin] = useState(true);

    const theme = createTheme({
        palette: {
          primary: {
            main: lightBlue[400],
          },
          secondary: {
            main: yellow[400],
          },
        },
      });  

    return (
       <div>
        <ThemeProvider theme={theme}>
       <Box>
                <Typography 
                variant="h1"
                sx={{textAlign: "center", marginTop: 20}}
                >
                    PASSCHECK APP
                    </Typography> 
               {showLogin ? (
                    <>
                    <Login onLogin={onLogin}/>
                    <hr></hr>
                    <Typography variant="h6">
                        Already have an account?
                    </Typography>
                        <br></br>
                        <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={() => setShowLogin(false)}>
                         Sign Up
                     </Button>
                    
                    </>
                    
                ) : (
                    <>
                    <SignUp onLogin={onLogin} />
                    <Typography variant="h6">
                        Already have an account?
                    </Typography>

                    <br></br>
                        <Button color="primary" variant="contained" onClick={() => setShowLogin(true)}>
                         Log In
                        </Button>

                    </>
                )
                }
               </Box>
               </ThemeProvider>
               </div>
    )
}

export default Landing