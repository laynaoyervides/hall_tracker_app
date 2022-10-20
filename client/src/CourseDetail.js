import React, { useState } from "react";
import EditCourse from "./EditCourse";

function CourseDetail ({deleteCourse, onUpdateCourse, course, instructors}) {
    const{id, course_name, class_period } = course;
    const [isEditing, setIsEditing]= useState(false);
    
    function handleDelete () {
        deleteCourse(id);
        fetch("http://localhost:3000/deletecourse" , {
            method: "DELETE",
        });
    };
    const handleCourseUpdate = (updatedCourse) => {
        setIsEditing(false);
        onUpdateCourse(updatedCourse);
      };
    return (
        <div>
            { isEditing ? (
                <EditCourse course={course} onUpdateCourse={handleCourseUpdate} instructors={instructors}/>
                ) :
                (<h3>Course Name:{course_name}<br></br>Class Period:{class_period}</h3>)
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
                <button onClick={handleDelete}><h5>DELETE</h5></button>
        </div>
    )
}

export default CourseDetail;