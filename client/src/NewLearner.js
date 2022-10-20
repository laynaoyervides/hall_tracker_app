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
            <h3>ADD A NEW LEARNER</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Learner Name:</label>
                <input 
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <button type="submit">Create Learner</button>
                </form>

        </div>
    )
}
export default NewLearner