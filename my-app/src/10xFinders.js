import React, { useState, useEffect } from "react";
import Base2 from './Base2.js'
import { makeStyles } from '@material-ui/core/styles';
import TenEx from "./image/10xfinders/10xfinders.png";
import TenLogo from './image/10xfinders/10xLogo.svg'
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";

 const useStyles = makeStyles(({
    box: {
        color: "#333333",
        marginLeft: "clamp(4vw, 16.5vw, 20vw)",
        marginRight: "clamp(4vw, 16.5vw, 20vw)",
    },
    tenExBg: {
        height: "75vh",
        width: "100%",
        backgroundColor: "#C6D8ED",
        margin: "0",
        overflow: "visible",
        position: "absolute",
    },
    tenExBgImg: {
        height: "70vh",
        position: "absolute",
        top: "5vh",
        right: "0",
        marginRight: "3.5vw",
        },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "76vh",
    },
    projectDesc: {
        position: "absolute",
        height: "5vh",
        width: "100%",
        marginTop: "69vh",
        display: "flex",
        flexDirection: "row",
    },
    contentWrapOverview:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent:"space-between",
    },
    overview: {
        position: "relative",
        height: "5vh",
        display: "flex",
        flexDirection: "row",
    },
    overviewColumn:{
        width: "32vw",
    },
    bodyText:{
        fontFamily: "Akagi Pro Medium",
        fontSize: "1rem",
    },
    headerText:{
        fontFamily: "Akagi Pro Bold",
        fontSize: "1rem",
    },
    descText:{
        fontFamily: "Akagi Pro Book",
        fontSize: "1rem",
        marginRight: "10.2vw",
        color: "#0B1F3D",
    },
    descHeaderText:{
        fontFamily: "Akagi Pro Bold",
        fontSize: "1rem",
        color: "#0B1F3D",
    },
    tenLogo: {
        position: "relative",
        height: "9.2vh",
        width: "auto",
        marginBottom: "10%",
        backgroundSize: "26rem",
        marginTop: "29vh",
        marginRight: "auto",
    },
    titleText: {
        position: "absolute",
        fontFamily: "Akagi Pro Bold",
        fontSize: "1.5rem",
        marginTop: "39vh",
        color: "#0B1F3D",
    },
}));

export default function TenxFinders(props) {
    const classes = useStyles();
    return (
        <div>
            <Base2 selected={"10xFinders"}/>
            <div className={classes.tenExBg}/>
            <div className={classes.box}>
                <img className={classes.tenExBgImg} src={TenEx}/>
                <div className={classes.content}>
                    <img src={TenLogo} className={classes.tenLogo}/>
                    <p className={classes.titleText}>
                        Job Recruiting made Faster and Simpler
                    </p>
                    <div className={classes.projectDesc}>
                        <p className={classes.descHeaderText}>Project :<span className={classes.descText}> 10xFinders </span></p>
                        <p className={classes.descHeaderText}>Role :<span className={classes.descText}> Research, Visual </span></p>
                        <p className={classes.descHeaderText}>Tools :<span className={classes.descText}> Adobe XD, After Effects, Illustrator </span></p>
                    </div>
                </div>
                <div className={classes.contentWrapOverview}>
                    <div className={classes.overviewColumn}>
                        <p className={classes.headerText}>Company Mission</p>
                        <p className={classes.bodyText}>10xFinders integrate all of a recruiter’s daily tasks into one platform. We focus on streamlining and
                            accelerating the hiring workflow to increase talent engagements, thus more hires. 10xFinders’ main features
                            include super-targeted talent search and sourcing, business insights on hires, promotions and vacancies from
                            companies all over the world and multi-step email campaigns with customization and metrics.
                        </p>
                    </div>
                    <div className={classes.overviewColumn}>
                        <p className={classes.headerText}>Involvement</p>
                        <p className={classes.bodyText}>My team comprised of expert recruiters, the software engineer, and me. As the sole design advocate of the
                            business solution, I was responsible for thoroughly researching the market and the target audience. In every
                            step of the process, I worked alongside my team members and participated in client meetings to study the
                            recruiting workflow and develop a user task flow. I worked on projects including logo, marketing materials,
                            company website, and software UI/UX.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}