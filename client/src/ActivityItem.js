import React, {useState, useEffect}from 'react'
import {Box, Card, Typography} from "@mui/material"

function ActivityItem ({activity}) {
    const [durationMins, setDurationMins] = useState(0)

    const getTime = () => {
        const time = Date.parse(activity.created_at) - Date.now();
        setDurationMins(Math.abs(Math.floor((time / 1000 / 60) % 60)));
        console.log(durationMins)
    }
useEffect(()=>{
    getTime();
}, [])
    return (
        <div>
        <Box>
            <Card
                sx={{
                    padding:2, 
                    marginBottom: 2
                }}
            >            
                <Typography>NAME: {activity.learner.name}   REASON: {activity.reason} TIME-OUT: {activity.created_at} DURATION: {durationMins} mins</Typography>
            </Card>
        </Box>
        </div>
    )
};

export default ActivityItem