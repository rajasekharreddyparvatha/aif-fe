/**
 * Created by rajasekhar on 05-Mar-19.
 */
import CONST from './constants'

let state = {
    applications : []
};

export  default function reducers(state = state, action) {
    switch (action.type) {
        case CONST.SET_APPS :
            return {
                ...state,
                applications: action.value.applications,
            };
    }
}