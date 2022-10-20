import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";

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
        <h1>Enrollments</h1>
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
        </div>
    )
}
export default Enrollments