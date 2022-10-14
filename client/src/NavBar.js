import React from "react"
import {Link} from "react-router-dom"


function NavBar() {
    return (
        <div>
            <nav>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/learners">Learners</Link>
            <Link to="/enrollments">Enrollments</Link>
            <Link to="/activity">Activity</Link>
            </nav>
        </div>
    )
}
export default NavBar