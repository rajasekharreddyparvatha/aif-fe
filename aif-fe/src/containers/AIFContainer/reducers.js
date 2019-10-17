import CONST from './constants'

const defaultState = {
    apps : [],
    selectedApp : undefined,
    selectedFeature : undefined,
    errorMessage : undefined
};
export default function reducers(state = defaultState , action ){
    switch (action.type) {
        case  CONST.SET_SELECTED_FEATURE_APP : return {
            ...state,
            selectedFeature : action.value.selectedFeature,
            selectedApp : action.value.selectedApp,
            selectedAppURL : action.value.selectedAppURL
        };
        default :
            return {
            ...state
        }
    }
}