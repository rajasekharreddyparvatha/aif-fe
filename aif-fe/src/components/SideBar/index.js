/**
 * Created by rajasekhar on 03-Dec-18.
 */
import React, { Component } from 'react';
import './styles.css';
import AIFContext from '../../containers/common/context'
let classnames = require('classnames');

export default  class SideBar extends  Component {
    static contextType = AIFContext;
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.context.getApps();
    }
    formURL(app, feature){
        let url = undefined
        if(app !== undefined){
            url = app.baseURL
        }
        if(feature === undefined){
            if(app.homePageURL !== undefined && app.homePageURL.trim() !== '' ){
                url = url + app.homePageURL;
            }
        } else{
            url = url + feature.url;
        }
        return url;
    }

    goTo(selectedApp, selectedFeature) {
        this.setState((state, props)=>{
            return {
                ...state,
                selectedApp,
                selectedFeature
            }
        });
        this.context.setSelectedFeatureApp(selectedApp, selectedFeature, this.formURL(selectedApp, selectedFeature));
    }
    render() {
        return (
            <div className='sideInfoWrapper'>
                { this.context.apps && this.context.apps.length > 0
                && this.context.apps.map((app, index) =>

                app && <div className='sideTexts' key={`Header-${index}`}>
                    <div  key={`Header1-${index}`}>
                        <div className={classnames('counter' , {['selectedNode']: app && app.selected === true})}>
                            {index+1}
                        </div>
                        <span onClick={()=>this.goTo(app, undefined)}  className={classnames('text',{['selectedTextfont']: app && app.selected === true})}>{app.appTitle}</span>
                        <div>
                            {
                                app.features && app.features.length > 0 && app.features.map((feature, subIndex)=>
                                feature && <div key={`subHeader1-${''+subIndex+''+index}`} className={classnames('sideTexts', 'featuresPadding')} >
                                    <div  onClick={()=>this.goTo(app, feature)} key={`subHeader-${''+subIndex+''+index}`}>
                                        <div className={classnames('counter' , {['selectedNode']: feature.selected === true})}>
                                            {(index+1) + '.'+(subIndex+1)}
                                        </div>
                                        <span className={classnames('text',{['selectedTextfont']: feature.selected === true})}>{feature.label}</span>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>)
                }
            </div>
        );
    }
}