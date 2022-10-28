import React, { useState } from "react";
import EditCourse from "./EditCourse";

function CourseDetail ({deleteCourse, onUpdateCourse, course, instructor}) {
   const{course_name, class_period, instructor_id } = course;
    const [isEditing, setIsEditing]= useState(false);
    
    
    const handleCourseUpdate = (updatedCourse) => {
        setIsEditing(false);
        onUpdateCourse(updatedCourse);
      };
    return (
        <div>
            { isEditing ? (
                <EditCourse course={course} onUpdateCourse={handleCourseUpdate} instructor={instructor}/>
                ) :
                (<h3>Course Name:{course.course_name}<br></br>Class Period:{course.class_period}</h3>)
            }
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}><h5>EDIT</h5></button>
                <button onClick={() => deleteCourse(course.id)}><h5>DELETE</h5></button>
        </div>
    )
}

export default CourseDetail;