import './App.css';
import {Routes, Route} from "react-router-dom"
import React, {useState, useEffect } from "react"

//Material UI
import {createTheme, ThemeProvider} from '@mui/material/styles'
import{lightBlue, yellow} from 'material-ui-colors';
 
//import subComponents
import NavBar from "./NavBar";
import Enrollments from './Enrollments';
import Courses from './CourseCrud';
import Learners from './Learners';
import Activity from './Activity';
import Home from './Home';
import Landing from './Landing';


function App() {  

 
//set theme colors to cyan primary and secondary is yellow 400 each
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

  
  //Login functionality
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((resp)=> {
    if (resp.ok) {
      resp.json().then((instructor) => setInstructor(instructor));
    }
  });
}, []); 

if (!instructor) return (
  <div style={{
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundColor: "#82f7ff", 
      padding: "100px"}}>
    <Landing onLogin={setInstructor} />
  </div>)

if (instructor.admin) return(
  <div
  style={{
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundColor: "#40c4ff", 
    padding: "100px"}}
  >
  <ThemeProvider theme={theme}>
    <NavBar instructor={instructor} setInstructor={setInstructor}/>
    <Routes>
        <Route exact path="/" element={<Home instructor={instructor} setInstructor={setInstructor}/>} />    
        <Route path='/courses' element={<Courses instructor={instructor} />} />
        <Route path="/enrollments" element={<Enrollments />} />
      
        <Route path="/learners" element={<Learners />} />
        <Route path="/activity" element={<Activity instructor={instructor}/>} />

        <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
</ThemeProvider>
</div>
)

  return (
      <div
      style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundColor: "#40c4ff", 
        padding: "100px"}}
      >
      <ThemeProvider theme={theme}>
        <NavBar instructor={instructor} setInstructor={setInstructor}/>
        <Routes>
            <Route exact path="/" element={<Home instructor={instructor} setInstructor={setInstructor}/>} />    
            <Route path='/courses' element={<Courses instructor={instructor} />} />
           {/*  <Route path="/enrollments" element={<Enrollments />} />
            <Route path="/learners" element={<Learners />} /> */}
            <Route path="/activity" element={<Activity instructor={instructor}/>} />

            <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
