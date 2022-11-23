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
    //set selected course and learner in state

    const[selectedCourse, setSelectedCourse]=useState()
    const[selectedLearner, setSelectedLearner]=useState()

    
   
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
        

//pass down a click handler
function handleCourseSelection(e){
    e.preventDefault();
    setSelectedCourse(e.target.value)
    console.log(selectedCourse)
}
//pass down another handler

function handleLearnerSelection(e){
    e.preventDefault();
    setSelectedLearner(e.target.value)
    console.log(selectedLearner)
}

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
                <Typography variant="h4" textAlign="center">Admin: Enroll learners in courses by choosing the course and adding learners</Typography>
                <div > 
                <FormControl fullWidth>
                 <InputLabel>Choose Your Course</InputLabel>
                    <Select
                        labelId="course_selection_label"
                        id="course_select"
                        label="Courses"
                        defaultValue=""
                    >
                        {courses.map((course)=>
                        <CourseSelect
                         key={course.id}
                         course={course}
                         /* courseName = {course.course_name}
                         classPeriod={course.class_period}  */
                         handleClick={handleCourseSelection}    
                        />

                   )}
                   </Select>
                   <Typography>You chose {selectedCourse}</Typography>
                        <br></br>
                    </FormControl>

                   <FormControl fullWidth>
                   <InputLabel>Choose A Learner</InputLabel>
                   <Select
                    defaultValue=""
                   >
                        {learners.map((learner)=>
                        <LearnerList 
                        learner={learner}
                         key={learner.id}
                        handleClick={handleLearnerSelection}    
                        />

                   )}
                   </Select>
                   <Typography>You chose {selectedLearner}</Typography>
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
           <NewEnrollment 
                addNewEnrollment={addNewEnrollment}                
            />
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
                            key ={enrollment.id}
                            course={enrollment.course_id}
                            learner= {enrollment.learner_id}
                            semester = {enrollment.semester}
                        />
                    )
                }
            </Box>
        </div>
    )
                        }
export default Enrollments