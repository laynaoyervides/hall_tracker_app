import React, { useState } from "react";

function EditCourse ({course, onUpdateCourse, instructors}) {
    const {course_name, class_period}=course;
    const[updatedName, setUpdatedName]=useState(course_name);
    const[updatedPeriod, setUpdatedPeriod]= useState(class_period);
    const [instructor, setInstructor]=useState("")

    const changeCourse = {
      course_name: updatedName,
      class_period: updatedPeriod,
      instuctor_id: (instructor.id)
    }

    function handleEditForm(e) {
    e.preventDefault();

    // Make a PATCH fetch request to update a single donation
    fetch("http://localhost:3000/editcourse", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeCourse),
    })
      .then((resp) => resp.json())
      .then((updatedCourse) => onUpdateCourse(updatedCourse));
  }
    return (
        <form onSubmit={handleEditForm}>
          <label htmlFor="coursename">Course Name:</label>
            <input
            id="classname"
            type="text"
            name="classname"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            />
            <label htmlFor="period">Class Period</label>
            <input
                id="period"
                type="period"
                name="period"
                value={updatedPeriod}
                onChange={(e)=>setUpdatedPeriod(e.target.value)}
            />
            <label>Instructor
                <select
                    placeholder="Select an Instructor"
                    onChange={(e)=> setInstructor(e.target.value)}
                    >
                        <option value="none">Select an instructor:</option>
                    {instructors.map((instructor)=>
                    (
                        <option key={instructor.id} value={instructor.id}>
                            {instructor.name}
                        </option>
                    ))}
                    </select>
                </label>
            <input type="submit" value="Save" />
        </form>
    )
}
export default EditCourse;