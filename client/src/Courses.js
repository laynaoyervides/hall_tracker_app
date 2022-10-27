import React from "react";
import CourseCrud from "./CourseCrud";

function Courses ({instructor}) {
       
    return (
        <div>
            <CourseCrud instructor={instructor}/>
        </div>

    )
}

export default Courses