import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";


function NewCourse ({addNewCourse, instructor}) {
    const [course_name, setCourse_name] = useState("")
    const [class_period, setClass_period] = useState("")

    const [errors, setErrors] = useState([]);


    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                course_name: course_name,
                class_period: class_period,
                instructor_id: instructor.id
            }
                
        ),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/courses", configObj)
        .then ((resp) => {
            if (resp.ok){
                resp.json().then((newCourse) => addNewCourse(newCourse));
            } else {
                resp.json().then((errorData)=> setErrors(errorData.errors));
            }
        });
    };


    return(
        <div>
            <Typography variant="h3"  sx={{marginTop:"30px"}}>+ ADD A NEW COURSE</Typography>
            <Box
            sx={{
                margin:"20px", justifyContent:"center"
            }}>
            <form onSubmit={handleSubmit}>
            <label htmlFor="coursename"><Typography variant="h5">Course Name:</Typography></label>
                <input 
                    id="coursename"
                    type="text"
                    placeholder="Course Name"
                    name="coursename"
                    value={course_name}
                    onChange={(e) => setCourse_name(e.target.value)}
                    />
                <label htmlFor="classperiod"><Typography variant="h5">Class Period</Typography></label>
                <input
                    id="period"
                    type="text"
                    placeholder="class period (#)"
                    name="period"
                    value={class_period}
                    onChange={(e)=> setClass_period(e.target.value)}
                    />
               <br></br>
               {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      
        <Button type="submit" variant="contained" sx={{marginTop:"15px", backgroundColor:"#82f7ff"}}>Create Course</Button>
        </form>
        </Box>
        </div>
    );
}

export default NewCourse;
