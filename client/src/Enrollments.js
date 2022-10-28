import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import {Box, FormControl, InputLabel, Select, Typography} from '@mui/material'

function Enrollments () {

    const [courses, setCourses]=useState([]);

    useEffect (
        () => {
            fetch(`/courses`)
            .then((resp) => resp.json())
            .then((courses)=> setCourses(courses));
        }, []);

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
                    <FormControl>
                <Select>
                   <InputLabel>Courses</InputLabel>
                   {courses.map((course)=>
                    <CourseList 
                    key={course.id}
                    course={course}
                    courseName = {course.course_name}
                    classPeriod={course.class_period}
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