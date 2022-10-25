import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import {Box, Typography} from '@mui/material'

function Enrollments () {

    const [courses, setCourses]=useState([]);

    useEffect (
        () => {
            fetch(`http://localhost:3000/courses`)
            .then((resp) => resp.json())
            .then((courses)=> setCourses(courses));
        }, []);

    return (
        <div>
            <Box                     
               marginTop={15}
               paddingTop={15}
               paddingLeft={15}
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#ffff72"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
        <Typography variant="h2">Enrollments</Typography>
            <div > 
                <div > 
                   <h2>Courses</h2>
                   {courses.map((course)=>
                    <CourseList 
                    key={course.id}
                    course={course}
                    courseName = {course.course_name}
                    classPeriod={course.class_period}
                    />

                   )}
                </div>
                
            </div>  
            </Box>      
        </div>
    )
}
export default Enrollments