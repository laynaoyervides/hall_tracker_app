import React, { useState } from "react";


function NewCourse ({addNewCourse, instructor}) {
    const [course_name, setCourse_name] = useState("")
    const [class_period, setClass_period] = useState("")

/*  const newCourse = {
        course_name: course_name,
                class_period: class_period,
                instructor_id: instructor.id  */      
//    }

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
        .then ((resp) => resp.json())
        .then ((newCourse) => {addNewCourse(newCourse)
        });
    };


    return(
        <div>
            <h3>ADD A NEW COURSE</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="coursename">Course Name:</label>
                <input 
                    id="coursename"
                    type="text"
                    placeholder="Course Name"
                    name="coursename"
                    value={course_name}
                    onChange={(e) => setCourse_name(e.target.value)}
                    />
                <label htmlFor="classperiod">Class Period</label>
                <input
                    id="period"
                    type="text"
                    placeholder="class period (#)"
                    name="period"
                    value={class_period}
                    onChange={(e)=> setClass_period(e.target.value)}
                    />
               
        <button type="submit">Create Course</button>
        </form>
        </div>
    );
}

export default NewCourse;
