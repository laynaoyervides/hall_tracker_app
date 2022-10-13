import './App.css';
import {Routes, Route} from "react-router"
import React, {useEffect, useState} from "react"

//Material UI
//import {createTheme, ThemeProvider} from '@mui/material/styles'
//import{cyan, yellow} from 'material-ui-colors';

//import subComponents
import NavBar from "./NavBar";
import Login from './Login';

function App() {  

  //set theme colors to cyan primary and secondary is yellow 400 each
 /*  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[400],
      },
      secondary: {
        main: yellow[400],
      },
    },
  }); */

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

function handleLogin(instructor) {
  setInstructor(instructor);
}

function handleLogout () {
  setInstructor(null);
}

  return (
//<ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/login" instructor={instructor} element={<Login onLogin={handleLogin} onLogout={handleLogout}/>} />
      </Routes>
    </div>
  //  </ThemeProvider>
  );
}

export default App;
