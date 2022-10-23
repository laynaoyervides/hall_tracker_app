import React from "react"
import {Link} from "react-router-dom"
import {AppBar, Toolbar, Typography, Tabs, Tab, Button} from '@mui/material';


function NavBar({instructor, onLogout}) {
    function handleLogout() {
        fetch("http://localhost:3000/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    return (

        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h2">PASSCHECK APP</Typography>
          
          <Tabs>
            <Link style={{textDecoration: 'none',color: 'black' , padding: '10px'}} to="/"><Tab label="Home" value="0" /></Link>
            <Link style={{textDecoration: 'none',color: 'black' , padding: '10px'}} to="/courses"><Tab label="Courses" value="1"/></Link>
            <Link style={{textDecoration: 'none',color: 'black' , padding: '10px'}} to="/learners"><Tab label="Learners" value="2"/></Link>
            <Link style={{textDecoration: 'none',color: 'black' , padding: '10px'}} to="/enrollments"><Tab label="Enrollments" value="3"/></Link>
            <Link style={{textDecoration: 'none',color: 'black' , padding: '10px'}} to="/activity"><Tab label="Activity" value="4"/></Link>


        <header>
                            { instructor ? (
                                <div>
                                <p>Welcome, {instructor.username}!</p>
                                 <button onClick={handleLogout}>Logout</button>
                                </div>
                                ) : (
                                    <Button sx={{padding: '10px', marginTop: "10px"}} variant="contained" color="secondary"> <Link to="/login">Login</Link></Button>
                                    )
                            }
                        </header>
                        </Tabs>

                    </Toolbar>
             </AppBar>
        </div>
    )
}
export default NavBar