/**
 * Created by rajasekhar on 04-Dec-18.
 */
import React, { Component } from 'react';
import ActionsQueue from '../../utils/ActionsQueue'
import ExecutionOfActions from '../../utils/ExecutionOfActions'
import AIFContext from '../../containers/common/context'

class AppIFrame extends  Component {
    static contextType = AIFContext;
    constructor(props){
        super(props);
        this.state ={
            selectedApp :  props.selectedApp,
            selectedFeature : props.selectedFeature,
            selectedAppURL : props.selectedAppURL,
        }
    }

    componentDidMount() {
        console.log(this.context)
    }
    componentDidUpdate(prevProps , presState){
        if(this.state.selectedFeature !== undefined){
            ActionsQueue.setActions(this.state.selectedApp, this.state.selectedFeature.actions, this.state.selectedFeature.actionsExecutionFlow);
            if(presState.selectedAppURL !== this.state.selectedAppURL && this.state.selectedFeature){
                this.ifr.onload = ()=>{
                    this.executeActions(this.state.selectedFeature.actionsExecutionFlow);
                    this.ifr.onload = undefined;
                };
            } else {
                this.executeActions(this.state.selectedFeature.actionsExecutionFlow)
            }

        }
    }

    executeActions(actionFlows){
        if(actionFlows && actionFlows.length > 0){
            (new ExecutionOfActions(this)).executeActions();
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            ...state,
            selectedApp : props.selectedApp,
            selectedFeature : props.selectedFeature,
            selectedAppURL : props.selectedAppURL
        }
    }

    render() {
        return (
            <iframe id='aif' className='url-loader' height="90%" src={this.state.selectedAppURL} ref={(f) => this.ifr = f }>
            </iframe>
        )
    }
}

export default AppIFrame;
