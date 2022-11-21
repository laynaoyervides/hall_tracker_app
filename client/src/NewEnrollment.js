import { Typography, Button } from '@mui/material';
import React, { useState } from 'react';

function NewEnrollment ({addNewEnrollment}) {
    const [courseId, setCourseId]= useState("");
    const [learnerId, setLearnerId] = useState("");
    
    const[errors, setErrors] = useState([])

    const configObj ={
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
            course_id: courseId, 
            learner_id: learnerId
            }
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/enrollments", configObj)
        .then ((resp) => {
            if (resp.ok){
                resp.json().then((newEnrollment)=>addNewEnrollment(newEnrollment));
            }else{
                resp.json().then((errorData) =>setErrors(errorData.errors));
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="course_id">
                    <Typography variant='h4'>Course</Typography>
                </label>
                     <input
                        id="course_id"
                        type="text"
                        placeholder="CourseId"
                        name="courseId"
                        value={courseId}
                        onChange={(e)=>setCourseId(e.target.value)}
                     />
                <label htmlFor="learnerId"><Typography variant="h4">Learner</Typography></label>
                    <input
                    id="learner_id"
                    type="text"
                    placeholder="LearnerId"
                    name="learner_id"
                    value={learnerId}
                    onChange={(e)=>setLearnerId(e.target.value)}
                    />
                <br></br>
                    {errors.length > 0 && (
                        <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                        <li key={error}>{error}</li>
                                    ))}
                     </ul>
                    )}
            <Button type="submit" variant="contained" sx={{marginTop:"15px", backgroundColor:"#82f7ff"}}>Create Enrollment</Button>
          </form>
        </div>
    );
};

export default NewEnrollment;