import React from "react";
import CourseCrud from "./CourseCrud";

function Courses () {
    const [instructors, setInstructors]=useState([]);
   
    useEffect (
        () => {
            fetch(`http://localhost:3000/instructors`)
            .then((resp) => resp.json())
            .then((instructor)=> setInstructors(instructor));
        }, []);

    return (
        <div>
            <CourseCrud instructors={instructors}/>
        </div>

    )
}

export default Courses