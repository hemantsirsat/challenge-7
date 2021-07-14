import React from "react";
import "./css/style.css";

export default class Card extends React.Component {
    render(){
        return(
            <div className="cardcontainer">
                <div className="topcolor" style={{backgroundColor:this.props.topcolor}}>
                </div>
                <div className="cardtext">
                    <p className="cardheader">
                        {this.props.header}
                    </p>
                    <p className="carddescription"> 
                        {this.props.description}
                    </p>
                </div>
                <div className="cardpicture">
                    <img
                        src={this.props.picture}
                        alt="card pic"
                    />
                </div>
            </div>
        )
    }
}