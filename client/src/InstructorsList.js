import React, { useState, useEffect } from "react";
import InstructorDetail from "./InstructorDetail";
import NewInstructor from "./NewInstructor";

function InstructorsList () {
    
    const [instructors, setInstructors] = useState([]);
    //get list of instructors   
      useEffect ( ()  => {
          fetch("http://localhost:9292/instructors")
          .then ((r) => r.json())
          .then ((instructors) => setInstructors(instructors));
      }, []); 
      
      // Add a new instructor - CREATE - 
      const addNewInstructor= (instructor) => {
          setInstructors([...instructors, instructor]);
      }
      //handle the edit - UPDATE -
      function handleUpdateInstructor(updatedInstructor){
          const updatedInstructors = instructors.map((instructor) => {
              if (instructor.id === updatedInstructor.id) {
                  return updatedInstructor;
              }
              else{
                  return instructor;
              }
          });
          setInstructors(updatedInstructors);
      }
  // delete an instructor - DELETE -
      function deleteInstructor (id) {
          const updatedInstructors = instructors.filter((instructor) => 
              instructor.id !== id);
          setInstructors(updatedInstructors);
  }
    
    
    
    
    
    return (
        <div>   
        {instructors.map((instructor)=> (
            <InstructorDetail key={instructor.id} 
            instructorName={instructor.name} 
            instructor={instructor} 
            instructors={instructors} 
            deleteInstructor={deleteInstructor} 
            onUpdateInstructor={handleUpdateInstructor}/>
            ))
        }
        <NewInstructor addNewInstructor={addNewInstructor}/>
    </div>
    )
}
export default InstructorsList