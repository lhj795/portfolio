import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { TypographyTheme } from './Styles.js';

const useStyles = makeStyles(({
    name: {
        fontFamily: "ClarendonBold",
        fontSize: "2.5rem",
        color: "#333333",
        marginRight: "2rem",
    },
    wrap: {
        margin: "2vw 7vw 0 7vw",
        position: "fixed",
        zIndex: "1",
    },
    nameAndDesc: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    body: {
        fontFamily: "Monaco",
        fontSize: ".875rem",
        lineHeight: "1.25",
    },
    navBar: {
        marginTop: "5vh",
        display: "flex",
        flexDirection: "column",
    },
    navBarItem: {
        fontFamily: "Monaco",
        fontSize: ".875rem",
        lineHeight: "1.25",
        color: "#333333",
        textDecoration: "none",
    },
    navBarItemHover: {
        fontFamily: "Monaco",
        fontSize: ".875rem",
        lineHeight: "1.25",
        color: "blue",
        textDecoration: "none",
    },
    link: {
        textDecoration: "none",
    },
}));

function NavBarItem(props) {
    const classes = useStyles();
    const [active, setActive] = useState(false);

    const onHover = (event) => {
        setActive(true);
    };

    const onLeave = (event) => {
        setActive(false)
    };


    const hoveredStyle = (active) ? classes.navBarItemHover : classes.navBarItem;
    const selectedStyle = (props.children===props.selected) ? classes.navBarItemHover : hoveredStyle;


    return (
        <Link 
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={classes.link}
        >
            <a className={selectedStyle} href={props.href}>
                {props.children}
            </a>
        </Link>
    )
}

export default function Base2(props) {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    const onHover = (event) => {
        setHover(true);
    };
    const onLeave = (event) => {
        setHover(false)
    };
    const hoveredStyle = (hover) ? classes.navBarItemHover : classes.navBarItem;
    
    return (
        <div>
            <BrowserRouter>
                <div className={classes.wrap}>
                    <div className={classes.nameAndDesc}>
                        <div className={classes.name}>
                            nicole
                        </div>
                    </div>
                    <div className={classes.navBar}>
                        <NavBarItem selected={props.selected} href="/">work</NavBarItem>
                        <NavBarItem selected={props.selected} href="/10xFinders">10xFinders</NavBarItem>
                        <NavBarItem selected={props.selected} href="/Kozi">Kozi</NavBarItem>
                        <NavBarItem selected={props.selected} href="/Involv">Involv</NavBarItem>
                        <NavBarItem selected={props.selected} href="/AMCWorld">AMC World</NavBarItem>
                        <NavBarItem selected={props.selected} href="Craigslist">Craigslist+</NavBarItem>
                        <NavBarItem selected={props.selected} href="/Drift">Drift</NavBarItem>
                        <NavBarItem selected={props.selected} href="/Lolcalyze">Lolcalyze</NavBarItem>
                        <br></br>
                        <NavBarItem selected={props.selected} href="/about">about</NavBarItem>
                        <NavBarItem selected={props.selected} href="/resume">resume</NavBarItem>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}
