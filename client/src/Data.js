import React, {useState, useEffect} from 'react';
import {Box, Typography} from "@mui/material"
import ActivityItem from "./ActivityItem"

function Data ()  {
    const [activities, setActivities]= useState([])

    
 useEffect( () => {
    fetch("/activities")
    .then((r)=> (r.json()))
    .then((activitiesArray) => {setActivities(activitiesArray)})
}, [])

/* const columns =[
    {field: 'name', headerName: "Name", width: 100},
    {field: 'reason', headerName: "Reason", width: 100}
] */

/* const rows= [
    {activities.map((activity)=> 
        {name: {activity.learner.name}, reason: {activity.reason}}
    )
    
    }
] */

    return (
        <div>
            <Box                     
               marginTop={10}
               padding={15}
               
               display ="flex" 
                flexDirection={'column'} 
                alignItems={"left"}
                justifyContent={"center"}
                backgroundColor={"#ffffff"}
                borderRadius={5}
                boxShadow={'5px 5px 10px #000'}
               >
                <Typography
                    variant='h2'
                >Currently Out of Class</Typography>
            {activities.map((activity) =>
                    <ActivityItem 
                    key={activity.id}
                    activity={activity}

                    
                    
                    />
               )}



               </Box>
               
        </div>
    );
};

export default Data;