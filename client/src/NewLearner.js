import { Typography, Button } from "@mui/material";
import React, {useState} from "react";

function NewLearner ({addNewLearner}) {
    const [name, setName] = useState("")

    const NewLearner ={
        name
    }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(NewLearner),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/createlearner", configObj)
        .then ((resp) => resp.json())
        .then ((learner) => {addNewLearner(learner)
        });
    };
    return(
        <div>
            <Typography variant="h6" sx={{marginTop: "10px"}}>ADD A NEW LEARNER</Typography>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name"
             sx={{}}
            >
                Learner Name: </label>
                <input 
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    paddingLeft={10}
                                        />
                <Button variant="contained" color="secondary" type="submit" sx={{marginLeft:"10px"}}>Create Learner</Button>
                </form>

        </div>
    )
}
export default NewLearner