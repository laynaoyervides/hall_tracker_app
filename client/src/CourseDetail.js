import React, { useState } from "react";
import EditCourse from "./EditCourse";
import {Card, Box, Typography} from "@mui/material"

function CourseDetail ({deleteCourse, onUpdateCourse, course, instructor}) {
   const{course_name, class_period } = course;
    const [isEditing, setIsEditing]= useState(false);
    
    
    const handleCourseUpdate = (updatedCourse) => {
        setIsEditing(false);
        onUpdateCourse(updatedCourse);
      };
    return (
        <div>
            <Card sx={{width:"60%", padding:"20px", margin:"10px", borderRadius:"10px"}}>
            <Box
            display={"inline"}
            >
             { isEditing ? (
                   <EditCourse course={course} onUpdateCourse={handleCourseUpdate} instructor={instructor}/>
                  ) :
                  (<>
                  <Typography variant="h3">{course_name}</Typography>
                  <Typography variant="h6">Class Period:{class_period}</Typography>
                  </>
                  )
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
            <button onClick={() => deleteCourse(course.id)}><h5>DELETE</h5></button>
            </Box>
        </Card>
        
        </div>
    )
}

export default CourseDetail;