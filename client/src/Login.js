import React, { useState } from "react"
import { Box, Typography, TextField, Button} from "@mui/material"
//import {useTheme} from "@mui/material/styles"

function Login ({onLogin}) {
       // const theme = useTheme();
        const [isSignup, setIsSignup] =useState(false);
        const [inputs, setInputs] =useState({
            
                username: "",
                email: "",
                password: "",

            });
        const handleChange = (e) => {
            setInputs((prevState)=> ({
                ...prevState,
                [e.target.name] : e.target.value
            }))
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch ("http://localhost:3000/login", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({inputs}),
            })
             .then ((r) => {
                if (r.ok) {
                r.json().then((instructor) => onLogin(instructor));
                }
            });
        }
            
        
        const resetState = () =>{
            setIsSignup(!isSignup)
            setInputs({username:"", email:"", password:""})
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display ="flex" 
                flexDirection={'column'} 
                max width={400}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                    marginTop={40}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{":hover": {
                        boxShadow:'10px 10px 20px #ccc'
                    }}}
                >
                <Typography 
                variant="h2" 
                padding={3} 
                textAlign="center">
                    {isSignup ? "SIGNUP" : "LOGIN"}
        
                </Typography>
                
                {isSignup && (

                     <TextField 
                    onChange={handleChange}
                    name="email"
                    value={inputs.email}
                    margin="normal" type={'email'} 
                    variant="outlined"
                    placeholder="Email"/>
                 
                )}

                <TextField 
                    onChange={handleChange}
                    name="username"
                    value={inputs.username}
                    margin="normal" 
                    type={'text'} 
                    variant="outlined" 
                    placeholder="Username"/>
                <TextField 
                    onChange={handleChange}
                    name="password"
                    value={inputs.password}
                    margin="normal" 
                    type={'password'} 
                    variant="outlined"
                    placeholder="Password"/>
                <Button 
                    type="submit"
                    variant="contained" 
                    color="secondary" 
                    sx={{marginTop: 3, borderRadius: 3}}
                    >
                    {isSignup ? "SIGNUP" : "LOGIN"}
                    
                </Button>
                <Button 
                onClick={resetState} 
                sx={{ marginTop:3, borderRadius: 3}}
                >
                Change To {isSignup ? "Login" : "Signup"}
                    </Button>                

</Box>
            </form>              
        </div>
    )
}
export default Login