import React from 'react'
import {Card, Typography} from '@mui/material'

function EnrollmentsView ({course, learner, semester}) {
    return(
        <>
        <Card sx={{margin:2}}>
        <Typography variant="h4" sx={{textAlign:"center", padding:2}}>LearnerID : {learner}, CourseID:{course}, Semester: {semester}</Typography>
        </Card>
        </>
    )
}

export default EnrollmentsView;  