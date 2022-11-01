import React from "react"
import {MenuItem} from '@mui/material'

function LearnerList ({learner}) {

    const {name} = learner;

    return (
        <MenuItem>

            <h3>{name}</h3>
        </MenuItem>
    )
}
export default LearnerList