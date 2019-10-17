/**
 * Created by rajasekhar on 05-Mar-19.
 */
import React from 'react'
import './style.css';


export default class Tail extends React.Component {
    constructor(props) {
        super(props);
    }

    openApplication(){
        //based on requirement need add _self property in window.open
        window.open(this.props.application.baseURL, "_self");
    }

    render(){
        if(this.props.application){
            return (<div className="tail" >
                <div className="tail-icon">
                    <img className="tail-image" src={'https://www.w3schools.com/css/paris.jpg'}></img>
                    {/*<img className="tail-image" src={this.props.application.url}></img>*/}
                </div>
                <div className="tail-label">
                    <span onClick={() => this.openApplication()}>
                        {this.props.application.appTitle}
                    </span>
                </div >
            </div>)
        } else {
            return "App not found"
        }

    }
}