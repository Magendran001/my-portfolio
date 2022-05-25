import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/bonvoy.png";
import whakaariLg from "../../../Assets/img/Portfolio items/bonvoy.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/youtube.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/youtube.png";
import newsAggregator from "../../../Assets/img/Portfolio items/foodApp.png";
import spacexSm from "../../../Assets/img/Portfolio items/purplle.png";
import spacexLg from "../../../Assets/img/Portfolio items/purplle.png";
import bewakoof from "../../../Assets/img/Portfolio items/bewakoof.png"
import maxfashion from "../../../Assets/img/Portfolio items/maxfashion.png"

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [maxfashion, maxfashion],
            alt: "Max_fashion_web_clone",
            heading: "Max_Fashion_clone",
            p1: "This is a clone of maxfashion.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/pavankalyangojju/MaxFashion-Clone",
            a1: "Github page for a project.",
            l2: "https://elegant-mcnulty-02e823.netlify.app/",
            a2: "Max_fashion_web_clone",
            tech: [html, css, js],
        },
        {
            image: [bewakoof, bewakoof],
            alt: "Bewakoof",
            heading: "Bewakoof web clone",
            p1: "Here we have tried to optimize the previous project cloning of Bewakoof by adding backend to it and some more functionality in the frontend.",
            l1: "https://github.com/KalyaniSahu879/bewakoofClone",
            a1: "Github page for a Bewakoof project.",
            l2: "https://bewakoof-wheat.vercel.app/",
            a2: "Bewakooflive website.",
            tech: [html, css, js, expressjs, nodejs],
        },
        // {
        //     image: [pounamunuiSm, pounamunuiLg],
        //     alt: "Youtube web clone",
        //     heading: "Youtube web clone",
        //     p1: "Getting familiar with google APIs by creating this simple Youtube-like app, where users can search and stream Youtube videos. Using JS, HTML and CSS.",
        //     l1: "https://github.com/AmbaliyaDhruv/YouTube_clone.github.io",
        //     a1: "Github page for a project.",
        //     l2: "https://ambaliyadhruv.github.io/YouTube_clone.github.io/",
        //     a2: "Youtube clone web project live website.",
        //     tech: [html, css, js],
        // },
        // {
        //     image: [newsAggregator, newsAggregator],
        //     alt: "Food App",
        //     heading: "Food App",
        //     p1: "A food search app, where users can search various dishes and get the full recipe of it and Implemented search functionality using JS debouncing to minimize the unnecessary api calls",
        //     l1: "https://github.com/AmbaliyaDhruv/FoodApp",
        //     a1: "Github page for a project.",
        //     l2: "https://food-app-ambaliyadhruv.vercel.app/index.html",
        //     a2: "Food App live website",
        //     tech:[html,css,js],
        // },
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
