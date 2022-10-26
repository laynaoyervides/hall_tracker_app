import React from "react"
import {MenuItem} from '@mui/material'

function CourseList ({course}) {

    const {course_name, class_period} = course;

    return (
        <MenuItem>

            <h3>Course Name: {course_name}</h3>
            <br></br>
            <h3>Class Period: {class_period}</h3>
        </MenuItem>
    )
}
export default CourseList