import React from 'react';
import classes from "./MyInput.module.scss";


export const MyInput = () => {
    return (
        <input className={classes.myInput} placeholder="Search anything"/>
    );
};