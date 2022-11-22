import React from "react";
import {MenuItem, Typography} from '@mui/material'

function CourseSelect ({course, handleClick}) {
    //const {course_name, class_period} = course;

    return(
        <MenuItem
        onClick={handleClick}
        value={course.id}
        >       
            Course: {course.course_name}, <br></br>
            Class Period: {course.class_period}
        </MenuItem>
    )
}
export default CourseSelect