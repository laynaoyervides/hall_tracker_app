import React, {useState, useEffect} from "react";
import LearnerDetail from './LearnerDetail'
import NewLearner from './NewLearner'
import { Box, Typography, Button } from "@mui/material";

function Learners () {

    const [learners, setLearners] = useState([])
    //const [q, setQ] = useState('');
    //const [results, setResults] = useState([])

    useEffect ( ()  => {
        fetch("/learners")
        .then ((r) => r.json())
        .then ((learners) => setLearners(learners));
    }, []);
//search learners
/* function handleSearch(q) {
    fetch(`/searchlearners/${q}`)
    .then((r) => r.json())
    .then((learners) => setResults(learners));
}
 */    // Add a new learner - CREATE - 
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
        fetch(`/learners/${id}`, {
            method: "DELETE",
        })
        .then ((r) => {
            if (r.ok){
                setLearners(learners.filter((learner) => learner.id !==id));
            }
        })
            .catch((err) => console.log(err));
    }

    return (
        <div>
               <Box                     
               marginTop={15}
               padding={15}
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={" #82f7ff"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
                <Typography variant="h1">
Learner Dashboard
                </Typography>
                {/* <form onSubmit={handleSearch}>
                    <label></label>
                    <input 
                        type="text"
                        placeholder="search by name"
                        value={q}
                        onChange={(e) => setQ(e.target.value)
                    }>
                    </input>
                    <Button type="submit">search</Button>
                </form>
                {results.map((learner)=>(
                    <LearnerDetail  
                    key={learner.id}
                    learnerName = {learner.name}
                    onUpdateLearner={handleUpdateLearner} 
                    deleteLearner={deleteLearner}    
                    learner={learner}           
                    />
                ))} */}
                <NewLearner addNewLearner={addNewLearner}/> 

              <Box
                display="grid" 
                flexDirection={'row'}
                gridTemplateColumns= 'repeat(3, 1fr)' 
                
                >
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
                 </Box>
                </Box>
        </div>
    )
}

export default Learners