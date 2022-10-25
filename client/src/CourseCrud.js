import React, {useState, useEffect} from "react"
import NewCourse from "./NewCourse";
import CourseDetail from "./CourseDetail";
import {Typography, Box} from "@mui/material"

function CourseCrud({instructors}) {
    const [courses, setCourses] = useState([])

     //get list of courses
     useEffect ( ()  => {
        fetch("/courses")
        .then ((r) => r.json())
        .then ((courses) => setCourses(courses));
    }, []);


    // Add a new course - CREATE - 
    const addNewCourse= (course) => {
        setCourses([...courses, course]);
    }
    //handle the edit - UPDATE -
    function handleUpdateCourse(updatedCourse){
        const updatedCourses = courses.map((course) => {
            if (course.id === updatedCourse.id) {
                return updatedCourse;
            }
            else{
                return course;
            }
        });
        setCourses(updatedCourses);
    }
    // delete a course - DELETE -
    function deleteCourse (id) {
        const updatedCourses = courses.filter((course) => 
            course.id !== id);
        setCourses(updatedCourses);

}
    return(
        <div>
            <Box                     
               marginTop={15}
               paddingTop={15}
               paddingLeft={15}
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#ffff72"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
            <Typography variant="h2">
Course Dashboard
                </Typography>
                <NewCourse addNewCourse={addNewCourse} instructors={instructors}/> 

            {courses.map((course) => (
                <CourseDetail 
                key={course.id}
                courseName = {course.course_name}
                classPeriod={course.class_period}
                deleteCourse={deleteCourse}
                onUpdateCourse={handleUpdateCourse}
                courses={courses}
                course={course}
                instructors={instructors}
                // learners={course.learners}
                />
            ))
        }
            </Box>
        </div>
    )
}

export default CourseCrud