import React, { useState } from "react"
import { Box, Typography, TextField, Button} from "@mui/material"
//import {useTheme} from "@mui/material/styles"

function Login ({onLogin}) {
       // const theme = useTheme();
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch ("/login", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            })
             .then ((r) => {
                if (r.ok) {
                r.json().then((instructor) => onLogin(instructor));
                }
            });
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
Login        
                </Typography>
                
                <TextField 
                    onChange={(e)=> setUsername(e.target.value)}
                    name="username"
                    value={username}
                    margin="normal" type={'username'} 
                    variant="outlined"
                    placeholder="Username"/>
                <TextField 
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    value={password}
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
LOGIN                    
                </Button>            

</Box>
            </form>              
        </div>
    )
}
export default Login