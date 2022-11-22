import React, {useState, useEffect} from "react"
import NewCourse from "./NewCourse";
import CourseDetail from "./CourseDetail";
import {Typography, Box} from "@mui/material"

function CourseCrud({instructor}) {
    const [courses, setCourses] = useState([]);

     //get list of courses
   /*   useEffect ( ()  => {
        fetch("/courses")
        .then ((r) => r.json())
        .then ((coursesArray) => 
            setCourses(
            coursesArray.filter((course)=>course.instructor_id === instructor.id))
        );
    }, [instructor.id]); */

  
        fetch("/me")
        .then ((r) => r.json())
        .then ((coursesArray) => 
            setCourses(
            coursesArray.courses));


 
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
        fetch(`/courses/${id}` , {
            method: "DELETE",
        })
        .then((r)=> {
       
            if (r.ok) {
                setCourses(courses.filter((course)=>course.id !==id));
            }
        })
            .catch((err)=> console.log(err))
    
    };


    return(
        <div>
            <Box                     
               marginTop={15}
               padding={15}
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#ffff72"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
            <Typography variant="h1" align="center" sx={{marginBottom:"20px"}}>
                My Course Dashboard
                </Typography>
                <Box
                display="grid" 
                flexDirection={'row'}
                gridTemplateColumns= 'repeat(3, 1fr)' 
                
                >
                     {courses.map((course) => (
                         <CourseDetail 
                            key={course.id}
                            courseName = {course.course_name}
                             classPeriod={course.class_period}
                              deleteCourse={deleteCourse}
                                onUpdateCourse={handleUpdateCourse}
                             course={course}
                             instructor={instructor}
                        />
                     ))
                 }

                 </Box>
                 <NewCourse addNewCourse={addNewCourse} instructor={instructor}/> 

            </Box>
        </div>
    )
}

export default CourseCrud