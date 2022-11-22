import React from "react"
import {MenuItem} from '@mui/material'

function LearnerList ({learner, handleClick}) {

//    const {name} = learner;

    return (
        <MenuItem
        onClick={handleClick}
        value={learner.id}
        >

            <h3>{learner.name}</h3>
        </MenuItem>
    )
}
export default LearnerList