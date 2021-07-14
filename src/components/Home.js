import React from "react";
import "./css/style.css";

import Card from "./Card.js";

import Supervisor from "./images/icon-supervisor.svg";
import Karma from "./images/icon-karma.svg";
import Builder from "./images/icon-team-builder.svg";
import Calculator from "./images/icon-calculator.svg";

export default function Home () {
    return(
        <div className="container">
            <div className="heading">
                <p className="reliable">
                    Reliable, efficient delivery
                    <br />
                    <span className="powered">
                        Powered by Technology
                    </span>
                </p>
                <p className="description">
                    Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
                </p>
            </div>
            <div className="cards">
                <div className="column1">
                    <Card 
                        header="Supervisor"
                        description="Monitors activity to identify project roadblocks"
                        topcolor="hsl(180,62%,55%)"
                        picture={Supervisor}
                    />
                </div>
                <div className="column2">
                    <Card 
                        header="Team Builder"
                        description="Scans our talent network to create the optimal team for your project"
                        topcolor="hsl(0,78%,62%)"
                        picture={Builder}
                    />
                    <Card 
                        header="Karma"
                        description="Regularly evaluates our talent to ensure quality"
                        topcolor="hsl(34,97%,64%)"
                        picture={Karma}
                    />
                </div>
                <div className="column3">
                    <Card 
                        header="Calculator"
                        description="Uses data from past projects to provide better delivery estimates"
                        topcolor="hsl(212,86%,64%)"
                        picture={Calculator}
                    />
                </div>
            </div>
        </div>
    )
}