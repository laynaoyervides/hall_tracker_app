import { Typography, Button } from "@mui/material";
import React, {useState} from "react";

function NewLearner ({addNewLearner}) {
    const [errors, setErrors] = useState([]);

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

        fetch("/learners", configObj)
        .then ((resp) => {
        if (resp.ok){
            resp.json().then((newLearner) => addNewLearner(newLearner));
        } else {
            resp.json().then((errorData)=> setErrors(errorData.errors));
        }
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
               
               {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
                <Button variant="contained" color="secondary" type="submit" sx={{marginLeft:"10px"}}>Create Learner</Button>
                </form>

        </div>
    )
}
export default NewLearner