/**
 * Created by rajasekhar on 05-Mar-19.
 */
import {connect} from 'react-redux';
import React from 'react';
import commonActions from './../common/actions'
import Applications from './../Applications/index'

function mapStateToProps({commonReducer})  {
    return {
        apps : commonReducer.apps,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getApps: () => commonActions.getApps(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
