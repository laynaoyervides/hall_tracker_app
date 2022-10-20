import React from "react"

function CourseList ({course}) {

    const {id, course_name, class_period} = course;

    return (
        <div>
            <h3>Course Name: {course_name}</h3>
            <br></br>
            <h3>Class Period: {class_period}</h3>
        </div>
    )
}
export default CourseList