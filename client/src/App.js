import './App.css';
import {Routes, Route} from "react-router-dom"
import React, {useState, useEffect } from "react"

//Material UI
import {createTheme, ThemeProvider} from '@mui/material/styles'
import{cyan, yellow} from 'material-ui-colors';
 
//import subComponents
import NavBar from "./NavBar";
import Login from './Login';
import Enrollments from './Enrollments';
import Courses from './Courses';
import Learners from './Learners';
import Activity from './Activity';
import Home from './Home';



function App() {  
 
//set theme colors to cyan primary and secondary is yellow 400 each
 const theme = createTheme({
  palette: {
    primary: {
      main: cyan[400],
    },
    secondary: {
      main: yellow[400],
    },
  },
});  

  
  //Login functionality
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then((resp)=> {
    if (resp.ok) {
      resp.json().then((instructor) => setInstructor(instructor));
    }
  });
}, []); 

function handleLogin(instructor) {
  setInstructor(instructor);
}

function handleLogout () {
  setInstructor(null);
} 

  return (
      <ThemeProvider theme={theme}>
        <NavBar instructor={instructor} handleLogout={handleLogout}/>
        <Routes>
            <Route exact path="/" element={<Home />} />    
            <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
            <Route path='/courses' element={<Courses />} />
            <Route path="/enrollments" element={<Enrollments />} />
            <Route path="/learners" element={<Learners />} />
            <Route path="/activity" element={<Activity/>} />
            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
