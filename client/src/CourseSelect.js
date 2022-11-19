import React from "react";
import {Typography} from '@mui/material'

function CourseSelect ({course}) {
    const {course_name, class_period} = course;

    return(
        <div>       

            <Typography variant="h3">{course_name} </Typography>
            <Typography variant="h6"> Class Period: {class_period}</Typography>
        </div>
    )
}
export default CourseSelect