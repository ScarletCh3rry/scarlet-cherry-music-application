import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HomePage.module.scss'
import {LatestPlayedSong} from "../../UI/LatestPlayedSong/LatestPlayedSong";

export const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <div className={classes.latestPlayed__container}>
                <div className={classes.latestPlayed__heading}>
                    <p className={classes.latestPlayed__title}>Latest played</p>
                    <NavLink to="#" className={classes.seeAll__link}><span>see all</span></NavLink>
                </div>
                <div className={classes.latestPlayed__list}>
                    <LatestPlayedSong/>
                    <LatestPlayedSong/>
                    <LatestPlayedSong/>
                    <LatestPlayedSong/>
                    <LatestPlayedSong/>
                    <LatestPlayedSong/>
                </div>
            </div>
            <div className={classes.trands__container}>
                <p className={classes.trands__title}>
                    Trands
                </p>
                <div className={classes.trands}>

                </div>
            </div>
        </div>
    );
};
