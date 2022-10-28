import React, {useState, useEffect} from "react";
import LearnerDetail from './LearnerDetail'
import NewLearner from './NewLearner'
import { Box, Typography } from "@mui/material";

function Learners () {

    const [learners, setLearners] = useState([])

    useEffect ( ()  => {
        fetch("/learners")
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

  /*   //delete learner
    function deleteLearner (id) {
        const updatedLearners = learners.filter((learner) => 
            learner.id !== id);
        setLearners(updatedLearners);
    } */
    function handleDelete (id) {
        //        deleteLearner(id);
                fetch(`/learners/${id}` , {
                    method: "DELETE",
                })
                .then((r) => {
                    if (r.ok) {
                        setLearners(learners.filter((learner)=> learner.id !==id));
                    }
                })
                .catch((err)=> console.log(err));
        
            }

    return (
        <div>
               <Box                     
               marginTop={15}
               paddingTop={15}
               paddingLeft={15}
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={" #82f7ff"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
                <Typography variant="h2">
Learner Dashboard
                </Typography>

                <NewLearner addNewLearner={addNewLearner}/> 

               {learners.map((learner) => (
                <LearnerDetail  
                key={learner.id}
                learnerName = {learner.name}
                onUpdateLearner={handleUpdateLearner} 
                handleDelete={handleDelete}    
                learner={learner}           
                />

                ))

        }
                </Box>
        </div>
    )
}

export default Learners