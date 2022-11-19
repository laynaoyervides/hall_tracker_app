import React, { useState, useEffect } from "react";
import CourseSelect from "./CourseSelect";
import LearnerList from "./LearnerList";
import {Box, FormControl, InputLabel, Select, Typography} from '@mui/material'

function Enrollments () {

 /*    const [enrollmentData, setEnrollmentData]=useState({
        course_id: course.id,
        learner_id: learner.id
    }) */
    const [courses, setCourses]=useState([]);
    const [learners, setLearners]=useState([]);
    
    //const [course_id, setCourse_id] =useState();
    //write a code for posting a newEnrollment
    //const addNewEnrollment= (enrollment) => {
       // setEnrollments([...enrollments, enrollment]);
    //}

    useEffect (
        () => {
            fetch(`/courses`)
            .then((resp) => resp.json())
            .then((courses)=> setCourses(courses));
        }, []);

        useEffect (
            () => {
                fetch(`/learners`)
                .then((resp) => resp.json())
                .then((learner)=> setLearners(learner));
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
        </div>
    )
                        }
export default Enrollments