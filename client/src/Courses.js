import React from "react";
import CourseCrud from "./CourseCrud";

function Courses () {
    const [instructors, setInstructors]=useState([]);
   
    useEffect (
        () => {
            fetch(`/instructors`)
            .then((resp) => resp.json())
            .then((instructor)=> setInstructors(instructor));
        }, []);
console.log(instructors);
    return (
        <div>
            <CourseCrud instructors={instructors}/>
        </div>

    )
}

export default Courses