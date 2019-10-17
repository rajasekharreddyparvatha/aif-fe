/**
 * Created by rajasekhar on 28-Sep-18.
 */
const request = require('request');
// var HttpsProxyAgent = require('https-proxy-agent');
const tunnel = require('tunnel');
const agent = tunnel.httpsOverHttp({
    maxSockets: 15, // Defaults to 5
    proxy: { // Proxy settings
        host: 'test-cache.com', // Defaults to 'localhost'
        port: 3128, // Defaults to 80
        headers: {
            'User-Agent': 'Node'
        }
    }
});
// var agent = new HttpsProxyAgent("cache.backside.sv2.tellme.com:3128");
const PropertiesReader = require('properties-reader');
const path = require('path');
const properties = PropertiesReader(path.join(appRoot , 'config', 'serverConfig.properties'));

class HttpClient {
    constructor(){
        this.properties = properties._properties
    }

    post(url){
        let opts = {
            uri: url,
            method: "POST",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
                'Authorization': "Basic MG9haGFhaXp5c0tiWFZUT2cwaDc6STZIVDdJS3ZXdUM1WFRCXzgzMjRtWjJyQzlxOXV3Rm92dWw5RzFPag==",
            },
            // agent : agent

        }
        return new Promise(function (resolve, rejct) {
            request(opts, function (error, response, body) {
                if(error != undefined){
                    rejct(error)
                }
                console.log('Error :: ' +JSON.stringify(error));
                console.log('body :: ' +response.body);
                resolve(JSON.parse(response.body));
            })
        })
    }

    get(){

    }

    delete(){

    }
}

module.exports = new HttpClient();