import React, { useState, useEffect } from "react";
import Base from './Base.js'
import { makeStyles } from '@material-ui/core/styles';
import TenEx from "./image/10xfinders/10xfinders.png";
import AMC from "./image/amc/amc.jpg";
import Craigslist from "./image/craigslist/craigslist.jpg";
import Localyze from "./image/localyze/localyze.jpg";
import Drift from "./image/drift/drift.jpg";
import Involv from "./image/involv/involv.jpg"
import Kozi from "./image/kozi/kozi.png";
import {Link} from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";

const useStyles = makeStyles(({
    btnContent: {
        textDecoration: "none",
        color: "inherit",
    },
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    default: {
        opacity: "0",
        display: "block",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.8s",
        position: "relative",
        textAlign: "center",
        paddingTop: "3.5vw",
    },
    defaultSmall: {
        opacity: "0",
        display: "block",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.8s",
        position: "relative",
        textAlign: "center",
    },
    hover: {
        opacity: "1",
        display: "block",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.8s",
        position: "relative",
        textAlign: "center",
        paddingTop: "7vw",
    },
    hoverSmall: {
        opacity: "1",
        display: "block",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.8s",
        position: "relative",
        textAlign: "center",
        paddingTop: "4vw",
    },
    cardImg: {
        position: "absolute",
        width: "32vw",
        height: "20vw",
        objectFit: "cover",
        display: "flex",
        alignContent: "flex-start",
        overflow: "hidden",
    },
    overlay: {
        width: "32vw",
        height: "20vw",
        transition: "background 0.8s",
        textAlign: "center",
        overflow: "hidden",
    },
    cardImgSmall: {
        position: "absolute",
        width: "18vw",
        height: "14vw",
        objectFit: "cover",
        display: "flex",
        alignContent: "flex-start",
        overflow: "hidden",
    },
    overlaySmall: {
        width: "18vw",
        height: "14vw",
        transition: "background 0.8s",
        textAlign: "center",
        overflow: "hidden",
    },
    cardImgMedium: {
        position: "absolute",
        width: "26vw",
        height: "20vw",
        objectFit: "cover",
        display: "flex",
        alignContent: "flex-start",
        overflow: "hidden",
    },
    overlayMedium: {
        width: "26vw",
        height: "20vw",
        transition: "background 0.8s",
        textAlign: "center",
        overflow: "hidden",
    },
    // cardImgZoomed: {
    //     position: "absolute",
    //     width: "32vw",
    //     height: "20vw",
    //     objectFit: "cover",
    //     zIndex: "",
    //     display: "flex",
    //     alignContent: "flex-start",
    // },
    titleWhite: {
        fontFamily: "ClarendonBold",
        color: "#FFFFFF",
        fontSize: "1.5rem",
        width: "100%",
        textAlign: "center",
    },
    titleBlack: {
        fontFamily: "ClarendonBold",
        color: "#333333",
        fontSize: "1.5rem",
        width: "100%",
        textAlign: "center",
    },
    descWhite: {
        fontFamily: "Monaco",
        color: "#FFFFFF",
        fontSize: ".875rem",
        width: "100%",
        textAlign: "center",
        margin: "0",
        marginTop: "-1rem",
    },
    descBlack: {
        fontFamily: "Monaco",
        color: "#333333",
        fontSize: ".875rem",
        width: "100%",
        textAlign: "center",
    },
    tenEx: {
        paddingLeft: "25vw",
        paddingTop: "3vw",
        width: "32vw"
    },
    kozi: {
        paddingLeft: "60vw",
        width: "32vw",
        top: "-8vw",
        position: "relative",
    },
    amc: {
        display: "flex",
        paddingLeft: "70vw",
        width: "32vw",
    },
    involv: {
        padding: "0 0 0 40vw",
        width: "26vw",
        marginTop: "-10vw",
    },
    craigslist: {
        padding: "4vh 0 0 2vw",
        width: "32vw",
    },
    localyze: {
        paddingLeft: "30vw",
        marginTop: "-10vh",
        width: "18vw",
    },
    drift: {
        paddingLeft: "60vw",
        width: "32vw",
    }
 }));

function Card(props) {
    const classes = useStyles(props);

    const [hover, setHovered] = useState(false);
    const onHover = (event) => {
        setHovered(true);
    };
    const onLeave = (event) => {
        setHovered(false)
    };
    const hoveredStyle = (hover) ? classes.hover : classes.default

    // const [zoom, setZoomed] = useState(false);
    // const imageZoom = (event) => {
    //     setZoomed(true);
    // };
    // const imageFit = (event) => {
    //     setZoomed(false)
    // };
    // const zoomedStyle = (zoom) ? classes.cardImgZoomed : classes.cardImg;    

    return (
        <div
            className={classes.overlay}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <img
                // onMouseEnter={imageZoom}
                // onMouseLeave={imageFit}
                className={classes.cardImg}
                src={props.img}
            />
            <div
                className={hoveredStyle}
                style={{
                    backgroundColor: props.bgColor,
                }}
            >
                <p className={classes.titleWhite}>{props.titleWhite}</p>
                <p className={classes.titleBlack}>{props.titleBlack}</p>
                <p className={classes.descWhite}>{props.descWhite}</p>
                <p className={classes.descBlack}>{props.descBlack}</p>
            </div>
        </div>
    )
}

function CardSmall(props) {
    const classes = useStyles(props);

    const [hover, setHovered] = useState(false);
    const onHover = (event) => {
        setHovered(true);
    };
    const onLeave = (event) => {
        setHovered(false)
    };
    const hoveredStyle = (hover) ? classes.hoverSmall : classes.defaultSmall

    // const [zoom, setZoomed] = useState(false);
    // const imageZoom = (event) => {
    //     setZoomed(true);
    // };
    // const imageFit = (event) => {
    //     setZoomed(false)
    // };
    // const zoomedStyle = (zoom) ? classes.cardImgZoomed : classes.cardImg;    

    return (
        <div
            className={classes.overlaySmall}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <img
                // onMouseEnter={imageZoom}
                // onMouseLeave={imageFit}
                className={classes.cardImgSmall}
                src={props.img}
            />
            <div
                className={hoveredStyle}
                style={{
                    backgroundColor: props.bgColor,
                }}
            >
                <p className={classes.titleWhite}>{props.titleWhite}</p>
                <p className={classes.titleBlack}>{props.titleBlack}</p>
                <p className={classes.descWhite}>{props.descWhite}</p>
                <p className={classes.descBlack}>{props.descBlack}</p>
            </div>
        </div>
    )
}

function CardMedium(props) {
    const classes = useStyles(props);

    const [hover, setHovered] = useState(false);
    const onHover = (event) => {
        setHovered(true);
    };
    const onLeave = (event) => {
        setHovered(false)
    };
    const hoveredStyle = (hover) ? classes.hover : classes.default

    // const [zoom, setZoomed] = useState(false);
    // const imageZoom = (event) => {
    //     setZoomed(true);
    // };
    // const imageFit = (event) => {
    //     setZoomed(false)
    // };
    // // const zoomedStyle = (zoom) ? classes.cardImgZoomed : classes.cardImg;    

    return (
        <div
            className={classes.overlayMedium}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <img
                // onMouseEnter={imageZoom}
                // onMouseLeave={imageFit}
                className={classes.cardImgMedium}
                src={props.img}
            />
            <div
                className={hoveredStyle}
                style={{
                    backgroundColor: props.bgColor,
                }}
            >
                <p className={classes.titleWhite}>{props.titleWhite}</p>
                <p className={classes.titleBlack}>{props.titleBlack}</p>
                <p className={classes.descWhite}>{props.descWhite}</p>
                <p className={classes.descBlack}>{props.descBlack}</p>
            </div>
        </div>
    )
}

export default function Work(props){
    const classes = useStyles();
    var BgColors = {
        TenEx: "rgba(198, 215, 236, 0.7)",
        AMC: "rgba(136, 27, 48, 0.7)",
        Kozi: "rgba(223, 242, 248, 0.7)",
        Involv: "rgba(59, 66, 86, 0.7)",
        Drift: "rgba(153, 196, 202, 0.7)",
        Craigslist: "rgba(226, 213, 252, 0.7)",
        Localyze: "rgba(132, 215, 183, 0.7)",
        More: "#EDF1FA",
    }
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once: true
        })
    })
    return (
        <div>
            <Base selected="work"/>
            <Link className={classes.btnContent} to="/AMCWorld"> 
                <div data-aos="fade-down" className={classes.amc}>
                    <CardSmall
                        titleWhite={"AMC World"}
                        descWhite={"Business Expansion, Service Design"}
                        img={AMC}
                        alt={"AMC World"}
                        bgColor={BgColors.AMC}
                    />
                </div>  
            </Link>
            <Link className={classes.btnContent} to="/10xFinders">
                <div data-aos="fade-right" className={classes.tenEx}>
                    <CardMedium
                        titleBlack={"10xFinders"}
                        descBlack={"Visual Identity System, Brand Activation, Web UI/UX"}
                        img={TenEx}
                        alt={"TenEx"}
                        bgColor={BgColors.TenEx}
                    />
                </div>
            </Link>
            <Link className={classes.btnContent} to="/Kozi"> 
                <div data-aos="fade-left" className={classes.kozi}>
                    <Card
                        titleBlack={"Kozi"}
                        descBlack={"Soft Goods, Game UI/UX, Design for Wellness"}
                        img={Kozi}
                        alt={"Kozi"}
                        bgColor={BgColors.Kozi}
                    />
                </div>
            </Link>
            <Link className={classes.btnContent} to="/Involv">
                <div data-aos="fade-up" className={classes.involv}>
                    <CardMedium
                        titleWhite={"Involv"}
                        descWhite={"Mobile UI/UX, E-Commerce Concept, Design for Cause"}
                        img={Involv}
                        alt={"Involv"}
                        bgColor={BgColors.Involv}
                    />
                </div>
            </Link>
            <Link className={classes.btnContent} to="/CraiglistPlusHousing"> 
                <div data-aos="fade-right" className={classes.craigslist}>
                    <Card
                        titleBlack={"Craigslist+ Housing"}
                        descBlack={"Responsive UI/UX, Service Concept"}
                        img={Craigslist}
                        alt={"Craigslist+ Housing"}
                        bgColor={BgColors.Craigslist}
                    />
                </div>
            </Link>
            <Link className={classes.btnContent} to="/Localyze"> 
                <div data-aos="fade-left" className={classes.localyze}>
                    <CardSmall
                        titleBlack={"Localyze"}
                        descBlack={"International Relocation Service, Mobile UI/UX, User Testing"}
                        img={Localyze}
                        alt={"Localyze"}
                        bgColor={BgColors.Localyze}
                    />
                </div>
            </Link>
            <Link className={classes.btnContent} to="/Drift"> 
                <div data-aos="fade-up" className={classes.drift}>
                    <Card
                        titleBlack={"Drift"}
                        descBlack={"Mobile UI/UX, Service Concept, Transportation Design"}
                        img={Drift}
                        alt={"Drift"}
                        bgColor={BgColors.Drift}
                    />
                </div>
            </Link>
        </div>
    )
}