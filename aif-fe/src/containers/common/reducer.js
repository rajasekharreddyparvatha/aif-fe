/**
 * Created by rajasekhar on 05-Mar-19.
 */
import CONST from './constants'

const defaultState = {
    apps : [],
};
export default function reducers(state = defaultState , action ){
    switch (action.type) {
        case CONST.SET_APPS :
            return {
                ...state,
                apps : action.value.apps,
                foundApps : true
            };
        case CONST.SET_APPS_FAILED :
            return {
                ...state,
                apps : [],
                foundApps : false,
                message : action.message
            };
        default :
            return {
                ...state
            }
    }
}