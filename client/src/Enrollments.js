import React, { useState, useEffect } from "react";
import InstructorsList from "./InstructorsList";
import CourseEnrollment from "./CourseEnrollment";

function Enrollments () {

    const [instructors, setInstructors]=useState([]);

    useEffect (
        () => {
            fetch(`http://localhost:3000/instructors`)
            .then((resp) => resp.json())
            .then((instructor)=> setInstructors(instructor));
        }, []);

    return (
        <div>
        <h1>Enrollments</h1>
            <div > 
                <div > 
                   <h2>Instructors</h2>
                   <p>View, Add, Edit, or Delete an Instructor</p>
                   <InstructorsList />
                </div>
                <div>
                     <h2>VIEW, ADD, EDIT OR DELETE A COURSE </h2>
                        <CourseEnrollment instructors={instructors}/>
                     <p>Find the student and delete their enrollment(...Coming Soon...)</p>
                </div>
            </div>        
        </div>
    )
}
export default Enrollments