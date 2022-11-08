import React, { useState } from "react"
import {Card, Typography, Button} from '@mui/material'
import LearnerActivity from "./LearnerActivity";

function CourseList ({course}) {
    const [learners, setLearners]=useState([]);

    const {course_name, class_period} = course;

    function handleClick(e) {
        e.preventDefault();
        //get the course
        //show a list of the learners in the course
        //map through the learners with the learners list
        console.log(course.learners);    
       
        //{ */      
        setLearners(course.learners);
    }
 
    return (
      <Card sx={{width:"90%", padding:"5px", margin:"5px", borderRadius:"10px"}}
        onChange = {handleClick}
      >        

            <Typography variant="h3" align="center">{course_name} </Typography>
            <Typography variant="h6"align="center"> Class Period: {class_period}</Typography>
        <Button onClick={handleClick} >Learners</Button>     
            {course.learners.map((learners) =>
             <LearnerActivity
                  key={learners.id}
                  name={learners.name}
              />
          )}
        

        </Card>
        
    )
}
export default CourseList