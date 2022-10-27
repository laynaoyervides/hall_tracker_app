import React, { useState } from "react";


function NewCourse ({addNewCourse}) {
    const [course_name, setCourse_name] = useState("")
    const [class_period, setClass_period] = useState("")

    const newCourse = {
        course_name,
        class_period        
    }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/courses", configObj)
        .then ((resp) => resp.json())
        .then ((course) => {addNewCourse(course)
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
                {/* <label>Instructor
                <select
                    placeholder="Select an Instructor"
                    onChange={(e)=> setInstructor(e.target.value)}
                    >
                        <option value="none">Select an instructor:</option>
                    {instructors.map((instructor)=>
                    (
                        <option key={instructor.id} value={instructor.id}>
                            {instructor.name}
                        </option>
                    ))}
                    </select>
                </label> */}
        <button type="submit">Create Course</button>
        </form>
        </div>
    );
}

export default NewCourse;
