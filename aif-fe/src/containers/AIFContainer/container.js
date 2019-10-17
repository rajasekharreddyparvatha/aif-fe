/**
 * Created by rajasekhar on 03-Dec-18.
 */
import React from 'react';
import {connect} from 'react-redux';
import AIFContainer from './index'
import aifContainerActions from './actions'
import commonActions from './../common/actions'
function mapStateToProps({AIFContainer, commonReducer})  {
    return {
        apps : commonReducer.apps,
        foundApps : commonReducer.foundApps,
        errorMessage : AIFContainer.errorMessage,
        selectedApp :  AIFContainer.selectedApp,
        selectedFeature : AIFContainer.selectedFeature,
        selectedAppURL : AIFContainer.selectedAppURL
    }
}

function mapDispatchToProps(dispatch) {
    return {
            getApps: () => commonActions.getApps(dispatch),
            setSelectedFeatureApp : (appId, featureId, selectedAppURL) => {aifContainerActions.setSelectedFeatureApp(dispatch, appId, featureId, selectedAppURL) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AIFContainer);