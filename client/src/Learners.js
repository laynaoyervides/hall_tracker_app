import React, {useState, useEffect} from "react";
import LearnerDetail from './LearnerDetail'
import NewLearner from './NewLearner'

function Learners () {

    const [learners, setLearners] = useState([])

    useEffect ( ()  => {
        fetch("http://localhost:3000/learners")
        .then ((r) => r.json())
        .then ((learners) => setLearners(learners));
    }, []);

    // Add a new learner - CREATE - 
    const addNewLearner= (learner) => {
        setLearners([...learners, learner]);
    }
    //handle the edit - UPDATE -
    function handleUpdateLearner(updatedLearner){
        const updatedLearners= learners.map((learner) => {
            if (learner.id === updatedLearner.id) {
                return updatedLearner;
            }
            else{
                return learner;
            }
        });
        setLearners(updatedLearners);
    }

    //delete learner
    function deleteLearner (id) {
        const updatedLearners = learners.filter((learner) => 
            learner.id !== id);
        setLearners(updatedLearners);
    }

    return (
        <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               {learners.map((learner) => (
                <LearnerDetail  
                key={learner.id}
                learnerName = {learner.name}
                onUpdateLearner={handleUpdateLearner} 
                deleteLearner={deleteLearner}    
                learner={learner}           
                />

                ))

        }
                <NewLearner addNewLearner={addNewLearner}/> 

        </div>
    )
}

export default Learners