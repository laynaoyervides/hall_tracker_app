import React, {useState} from "react";
import { Typography, Box, Button } from "@mui/material";
function NewActivity ({learner_id}) {
    const[reason, setReason] = useState("")
    const[notes, setNotes] = useState("")
    const[activities, setActivities]= useState([])

    const [errors, setErrors] = useState([]);


    const addNewActivity= (activity) => {
        setActivities([...activities, activity]);
    }

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                reason: reason,
                notes: notes,
                out_of_class: true,
                learner_id: learner_id
            }
                
        ),
    };    
    
    function handleSubmit(e) {
        e.preventDefault();

        fetch("/activities", configObj)
        .then ((resp) => {
            if (resp.ok){
                resp.json().then((newActivity) => addNewActivity(newActivity));
            } else {
                resp.json().then((errorData)=> setErrors(errorData.errors));
            }
        });
    }
    
    
    return (
        <Box
        sx={{backgroundColor: '#ffff72'}}
        >
            <Typography variant="h6">CHECK OUT</Typography>
            <form onSubmit={handleSubmit}>
               <Typography> <label>REASON</label></Typography>
                <input
                    id= 'reason'
                    type="text"
                    name="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder='example: restroom, RR'
                />
               <Typography> <label>NOTES</label> </Typography>
                <input
                    id="notes"
                    type="text"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    
                />
                <br></br>
                {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
            <Button type="submit" variant="contained" sx={{marginTop:"15px", backgroundColor:"#82f7ff"}}>New Activity</Button>

            </form>
        </Box>
    )
}

export default NewActivity;