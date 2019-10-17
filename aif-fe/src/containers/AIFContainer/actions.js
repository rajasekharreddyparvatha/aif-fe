export  default class Actions {
    static setSelectedFeatureApp(dispatch, selectedApp, selectedFeature, selectedAppURL){
        dispatch({
            type : 'SET_SELECTED_FEATURE_APP',
            value : {
                selectedApp,
                selectedFeature,
                selectedAppURL,
        }
        })
    }
}