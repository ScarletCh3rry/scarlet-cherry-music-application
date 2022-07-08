import React from 'react';
import {NavLink} from "react-router-dom";
import {MyInput} from '../UI/MyInput/MyInput';
import classes from './Header.module.scss'
import logo from '../../resources/images/logo.svg'
import tempAva from '../../resources/images/temporaryAvatar.png'


export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.mainLogo}>
                <img className={classes.mainLogoImg} src={logo} alt=""/>
            </div>
            <div className={classes.navBar__container}>
                <div className={classes.navBar}>
                    <div className={`${classes.navLink__container} ${classes.homeBtn}`}>
                        <NavLink className={classes.navLink} to="#">
                            Home
                        </NavLink>
                    </div>
                    <div className={`${classes.navLink__container} ${classes.playlistsBtn}`}>
                        <NavLink className={classes.navLink} to="#">
                            Playlists
                        </NavLink>
                    </div>
                    <div className={`${classes.navLink__container} ${classes.subscribersBtn}`}>
                        <NavLink className={classes.navLink} to="#">
                            Subscribers
                        </NavLink>
                    </div>
                </div>
                <MyInput/>
                <div className={classes.accountFeatures}> {/*TODO: подвинуть в конец блока чтобы при ховере сливалось с бекграундом*/}
                    <img src={tempAva} alt="" className={classes.accountFeaturesAvatar}/>
                    {/*<img src={shape} alt="" className={classes.shape}/>*/}
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4.75 5M8.5 9L16 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>

            </div>
        </div>
    );
};
