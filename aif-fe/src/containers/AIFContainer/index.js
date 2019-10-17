/**
 * Created by rajasekhar on 03-Dec-18.
 */
import React from 'react'
import {connect} from 'react-redux';
import AppIFrame from '../../components/AppIFrame/index'
import SideBar   from '../../components/SideBar/index'
import AIFContext from './../common/context'
export default class RightPanel extends React.Component{
    constructor(props){
        super(props);
    }
    getContext(){
        return {
            apps :  this.props.apps,
            getApps: this.props.getApps,
            setSelectedFeatureApp : this.props.setSelectedFeatureApp
        }
    }
    render(){
        return (
        <AIFContext.Provider value = {this.getContext()}>
            <div className='main-wrapper'>
                <div className='web-loader'>
                    <AppIFrame selectedApp={this.props.selectedApp}  selectedFeature={this.props.selectedFeature} selectedAppURL={this.props.selectedAppURL}/>
                </div>
                <div className='side-wrapper'>
                    <SideBar/>
                </div>
            </div>
        </AIFContext.Provider>

        );
    }
}
