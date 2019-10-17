/**
 * Created by rajasekhar on 05-Mar-19.
 */
import React from 'react'
import Tail from './../../components/Tail'
import AIFContext from './../common/context'
import CONST from './../Applications/constants'
import SearchBox from './../../components/common/SearchBox/index'
import './style.css';

export default class Applications extends React.Component {

    constructor(props) {
        super(props);
        this.appTypes = [CONST.GENERAL, CONST.AIVA, CONST.CHAT];
        this.appTypesLabels = {
            [CONST.GENERAL] : "General",
            [CONST.AIVA]  : "[24]7 AIVA for Digital",
            [CONST.CHAT] : "[24]7 Chat"
        }
        this.searchText = undefined;
    }
    componentDidMount(){
        this.props.getApps();
    }
    getApplicationsOfType(applicationType){
        let searchText = this.searchText;
        let tempApp = [];
        this.props.apps && this.props.apps.forEach(app => {
                        if( searchText != undefined && searchText.trim() != ''  && !app.appTitle.toLowerCase().includes(searchText.toLowerCase())){
                            return null
                        } else if(app.appType === applicationType){
                            return tempApp.push(<div key={app.appId} className="application-margin">
                                <Tail application = {app}> </Tail>
                            </div>);
                        }
                    });
        if(tempApp.length == 0)
            return [];

        return (<>
                    <div key={applicationType+'label'} className="application-type-label">
                        <label>{this.appTypesLabels[applicationType]}</label>
                    </div>
                    <div key={applicationType + "apps"} className="applications-flex-display">
                        {tempApp}
                    </div>
                </>);
    }
    getContext(){
        return {
            apps :  this.props.apps,
        }
    }
    onSearch(){
        this.forceUpdate()
    }
    onChange(e){
        this.searchText = e.target.value
    }

    render(){
        return ( <AIFContext.Provider value = {this.getContext()}>
                    <div className="application-panel">
                        <div className="subHeader">
                            <div className="unifiedAdminConfigurationsLabel">
                                <label>Unified Admin Configurations</label>
                            </div>
                            <div className="searchBox">
                                <SearchBox onSearch={()=> this.onSearch()}
                                            onChange={(e)=>this.onChange(e)}></SearchBox>
                            </div>
                        </div>
                        <div >
                            { this.appTypes.map(type => this.getApplicationsOfType(type) )}
                        </div>
                    </div>
                </AIFContext.Provider>)
    }
}
