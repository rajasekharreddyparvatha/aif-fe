/**
 * Created by rajasekhar on 28-Sep-18.
 */
const path = require('path');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader(path.join(appRoot , 'config', 'serverConfig.properties'));

class OktaEndpoints {
    constructor(){
        this.properties = properties._properties
    }
    token(code){
        let URL = this.properties['okta.token'];
        let query = 'grant_type='+this.properties['okta.grant_type']+'&'+
                    'code='+code+'&'+
                    'redirect_uri='+this.properties['okta.redirect_uri'];
        return URL + '?' + query;
    }
    authorize(userTarget ='/'){
        let URL = this.properties['okta.authorize'];
        let query = 'client_id='+this.properties['okta.client_id']+'&'+
                    'redirect_uri='+this.properties['okta.redirect_uri']+'&'+
                    'response_type='+this.properties['okta.response_type']+'&'+
                    'response_mode='+this.properties['okta.response_mode']+'&'+
                    'nonce='+this.properties['okta.nonce']+'&'+
                    'state='+userTarget+'&'+
                    'scope='+this.properties['okta.scope'];
        return URL+'?'+query
    }
}

module.exports = new OktaEndpoints();
