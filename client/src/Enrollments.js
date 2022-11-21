import React, { useState, useEffect } from "react";
import CourseSelect from "./CourseSelect";
import LearnerList from "./LearnerList";
import {Box, FormControl, InputLabel, Select, Typography, Button} from '@mui/material'
import EnrollmentsView from "./EnrollmentsView";
import NewEnrollment from "./NewEnrollment";

function Enrollments () {


    const [courses, setCourses]=useState([]);
    const [learners, setLearners]=useState([]);
    const [enrollments, setEnrollments] =useState([]);
    
    
   
    //get list of courses
    useEffect (
        () => {
            fetch(`/courses`)
            .then((resp) => resp.json())
            .then((courses)=> setCourses(courses));
        }, []);
    //get list of learners
    useEffect (
            () => {
                fetch(`/learners`)
                .then((resp) => resp.json())
                .then((learner)=> setLearners(learner));
            }, []);

 //get list of enrollments
    useEffect (
                () => {
                    fetch(`/enrollments`)
                    .then((resp) => resp.json())
                    .then((enrollments)=> setEnrollments(enrollments));
                }, []);
        

/* const handleChange = (e)=> {
    setEnrollmentData({
        ...enrollmentData, [e.target.name]:e.target.value,
    })
}
const enrollData = {...enrollmentData};

const configObj = {
    metnod: "POST",
    headers:{
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(enrollData)
}

function handleSubmit(e) {
    e.preventDefault();

    fetch("/enrollments", configObj)
    .then ((r) => {
        if (r.ok) {
            r.json() .then((enrollment) => {setEnrollmentData(enrollment);
        });
    }
        else{
            r.json().then((errors)=>{
                console.error(errors)
            });
        }
    });
}
 */

const addNewEnrollment= (enrollment) => {
    setEnrollments([...enrollments, enrollment]);
}

return (
        <div>
            <Box                     
               marginTop={15}
               padding={15}
               
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#ffff72"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
        
        <Typography variant="h1" textAlign="center">Enrollments</Typography>
            <br></br>
            <div > 
                <Typography variant="h4" textAlign="center">Enroll students in your courses by choosing your course and adding students</Typography>
                <div > 
                <FormControl fullWidth>
                 <InputLabel>Choose Your Course</InputLabel>
                    <Select
                        labelId="course_selection_label"
                        id="course_select"
                        value={courses}
                        label="Courses"
                    //    onChange={handleChange}
                    >
                        {courses.map((course)=>
                        <CourseSelect
                         key={course.id}
                         course={course}
                         courseName = {course.course_name}
                         classPeriod={course.class_period}     
                        />

                   )}
                   </Select>
{/* //LearnerList */}<br></br>
                    </FormControl>

                   <FormControl fullWidth>
                   <InputLabel>Choose A Learner</InputLabel>
                   <Select>
                        {learners.map((learner)=>
                        <LearnerList 
                        learner={learner}
                         key={learner.id}
                         name={learner.name} 
                        // onChange={handleChange}    
                        />

                   )}
                   </Select>
                   </FormControl>
                </div>
                
            </div>  
            </Box>   
{/* Create an Enrollment */}
            <Box
                 marginTop={15}
                 padding={15}
                 backgroundColor={"#ffff72"}
                 borderRadius={5}
                 boxShadow={'5px 5px 10px #000'}
            >
            <Typography variant="h3">Enroll a student</Typography>    
           <NewEnrollment addNewEnrollment={addNewEnrollment}/>
            </Box>   
            <Box
            marginTop={15}
            padding={15}
            display="grid" 
            flexDirection={'row'}
            gridTemplateColumns= 'repeat(5, 1fr)'
             alignItems={"left"}
             justifyContent={"center"}
             backgroundColor={"#ffff72"}
             borderRadius={5}
             boxShadow={'5px 5px 10px #000'}
            >
               This box is for the list of enrollments
              {/*  <Typography>Search for Enrollments by CourseID</Typography>
               <form>
                <label>CourseID</label>
                <input></input>
                <Button type="submit">SEARCH</Button>
               </form> */}
               
                {
                    enrollments.map((enrollment)=> 
                        <EnrollmentsView 
                            course={enrollment.course_id}
                            learner = {enrollment.learner_id}
                            semester = {enrollment.semester}
                        />
                    )
                }
            </Box>
        </div>
    )
                        }
export default Enrollments