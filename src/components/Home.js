import React from "react";
import "./css/style.css";

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
            </div>
        </div>
    )
}