import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { Link, Render } from "react-router-dom";
import 'aos/dist/aos.css';
import maskAnimation from "./image/maskAnimation.mp4"
import './App.css';

const useStyles = makeStyles(({
    wrap: {
        height: "100vh",
        margin: "0",
    },
    svg: {
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
    },
    text: {
        fontFamily: "ClarendonBold",
        fontSize: () =>{
            if (window.pageYOffset > 3029) {
                return "4rem"
            } else {
                return "14rem"
            }
        },
        transition: "1s",
        textAnchor: "middle",
        fill: "blue",
        position: "fixed",
    },
    textBlack: {
        fontFamily: "ClarendonBold",
        textAnchor: "middle",
        zIndex: "1",
        opacity: () =>{
            if (window.pageYOffset > 600) {
                return "1"
            } else {
                return "0"
            }
        },
        fontSize: () =>{
            if (window.pageYOffset > 3029) {
                return "4rem"
            } else {
                return "14rem"
            }
        },
        transition: "1s",
        color: "#333333",
        height: "100Vh",
        width: "100vw",
    },
    video: {
        width: "100%",
        height: "auto",
        marginTop: "-8%",
        objectFit: "contain",
        opacity: () =>{
            if (window.pageYOffset > 3029) {
                return "0"
            } else {
                return "1"
            }
        },
    },
    rect: {
        fill: "white",
    },
    scrollBound: {
        height: "500vh",
    },
    canvas: {
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, 50%)",
        maxWidth: "100vw",
        maxHeight: "100vh",
    },
    titles: {
        fontFamily: "ClarendonRegular",
        fontSize: "2rem",
        position: "fixed",
        top: "41%",
        mixBlendMode: "difference",
        color: "white",
        right: "-59%",
    },
    rect: {
        x: "0",
        height: () =>{
            if (window.pageYOffset > 3029) {
                return "0"
            } else {
                return "100%"
            }
        },
        width: () =>{
            if (window.pageYOffset > 3029) {
                return "0"
            } else {
                return "100%"
            }
        },
    }
}));

export function Resume(props) {
    const classes = useStyles(props); 
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    console.log(offsetY)

    const textXY = () => {
        if (window.pageYOffset > 3029) {
            return "10%"
        } else {
            return "50%"
        }
    }

    const heightWidth = () => {
        if (window.pageYOffset > 3029) {
            return "0"
        } else {
            return "100%"
        }
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.scrollBound}>
                <div style={{position: "fixed"}}>
                    <svg className={classes.svg} height="100%" width="100%">
                    <text className={classes.textBlack} x="50%" y="50%">nicole lee</text>
                        <defs>
                            <mask id="mask" x="0" y="0" height="100%" width="100%">
                                <rect x="0" y="0" height="100%" width="100%"/>
                                <text className={classes.text} x="50%" y="50%">nicole lee</text>
                            </mask>
                        </defs>
                        <rect className={classes.rect}/>
                    </svg>
                        <video 
                            id="v0"
                            className={classes.video} 
                            muted
                            playsInline
                            autoPlay
                        >
                            <source src={maskAnimation} type="video/mp4"/>
                        </video>
                    <div style={{transform: `translateX(${offsetY * -1}px)`}} className={classes.titles}>
                        product designer / ux designer / frontend engineer / food connoisseur
                    </div>
                </div>
            </div>
            <div style={{width: "90vw", height: "90vh", backgroundColor: "red"}}/>
        </div>
    );
}