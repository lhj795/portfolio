import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    name: {
        fontFamily: "ClarendonBold",
        fontSize: "7rem",
        color: "#333333",
    }
}));

export default function Base() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.name}>
                nicole
            </div>
        </div>
    );
}
