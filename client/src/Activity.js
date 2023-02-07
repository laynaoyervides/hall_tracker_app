import React, {useState, useEffect}from "react";
import {Box, Typography} from "@mui/material"
import CourseList from "./CourseList";
import LearnerActivity from "./LearnerActivity";

function Activity ({instructor}) {
    const [courses, setCourses] = useState([]);


useEffect ( () => {
    fetch("/me")
    .then ((r) => r.json())
    .then ((coursesArray) => 
                    setCourses(coursesArray.courses));
    }, [])

    return (
        <div>
            <Box                     
               marginTop={15}
               padding={15}
               
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#82f7ff"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
        
        <Typography variant="h1" textAlign="center">Activity</Typography>
        <Typography variant="h2" textAlign="center">Choose your course to start tracking activity</Typography>
        <br></br>

      <Typography>Click on your course to see a learner list</Typography>
            <Box
                display="grid" 
                flexDirection={'row'}
                gridTemplateColumns= 'repeat(3, 1fr)' 

            >
            {courses.map((course)=>
                        <CourseList 
                         key={course.id}
                         course={course}
                         courseName = {course.course_name}
                         classPeriod={course.class_period}  
                         learners = {course.learners}  
                        />
                        )}

        </Box>  
        </Box> 
        </div>
    )
}
export default Activity;