/**
 * Created by rajasekhar on 27-Sep-18.
 */
global.appRoot = __dirname;
const path = require('path');
const http = require('http');
const express = require( 'express');
const bodyParser = require( 'body-parser');
const cookieParser = require( 'cookie-parser');
const app = express();
const aifHttpClient = require('./src/utils/http-client.js');
const oktaEndpoints = require('./src/utils/okta-endpoints.js');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



app.use(function (req, res, next) {
    if(req._parsedUrl.pathname === '/implicit/callback') {
        next();
        return;
    }
    //need check access-token valid or invalid, user has to redirect to okta sign-in page either token invalid or token not available
    if(!req.cookies.accessToken){
        res.redirect(oktaEndpoints.authorize(req.url));
        return;
    } else {
        next();
        return;
    }
});

app.get('/static/*', express.static(path.join(__dirname, 'build')));

app.get('/implicit/callback', function(req, res) {
    aifHttpClient.post(oktaEndpoints.token(req.query.code)).then((responseData)=>{
        console.log(JSON.stringify(req.params.token));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Content-Type', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.cookie('accessToken', responseData.access_token ?responseData.access_token : '', {domain: '.rajasekhar-inc.net', path: '/', httpOnly : true});
        res.redirect(req.query.state)
    }).catch((error)=>{
        res.send("internal server error")
    });
    return;
});

app.get('/*', function (req, res, next) {
    if(req.cookies.accessToken){
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    } else {
        res.send({'error':'error'})
    }
});

// app.all('*', function (req, res, next) {
//     console.log(req._parsedUrl.pathname);
//     res.send('error');
// })
http.createServer(app).listen(8800, ()=>{
    console.log("server started on 8800");
});

