/**
 * Created by rajasekhar reddy on 02-Nov-18.
 */
let aifObject = {
    actionStatus : undefined,
    action : undefined,
    appId :  undefined,
    featureId : undefined
};
let iframeLoaded = false;
let aifWindow = undefined;
let parentOrigin = 'http://aif.rajasekhar-inc.net:3002';

function clearAIFObject() {
    aifObject = {}
}

function setAIFObject(data){
    aifObject.actionStatus = undefined;
    aifObject.action = data.action;
    aifObject.appId = data.appId;
    aifObject.featureId = data.featureId;
}


function addMessageEventListener() {
    window.addEventListener(
        "message",
        onReceiveEvent,
        false
    );
}
addMessageEventListener();
function onReceiveEvent(object){
    aifWindow = window.top;;
    let data = object.data;
    if(object.origin === parentOrigin){
        if(data.type === 'executeAction'){
            setAIFObject(data.payload);
            try{
                aifObject.actionStatus = 'inProgress';
                executeAction(aifObject.action);
                aifObject.actionStatus = 'completed'
            } catch (e){
                console.error(e)
                aifObject.actionStatus = 'failed';
            }
            sendActionStatusToAIF(aifObject);
        }
        if(data.type === 'AppData') {
            window.localStorage['appData'] = data.payload;
        }
        if(data.type === 'actionStatus'){
            sendActionStatusToAIF(aifObject);
        }
        if(data.type === 'isIframeLoaded'){
            sendIFrameLoadStatusToAIF();
        }
    }
}

function sendIFrameLoadStatusToAIF(status) {
    aifWindow.postMessage({
        type : 'isIframeLoaded',
        payload : {
            isIframeLoaded : iframeLoaded ? iframeLoaded : checkFrameLoaded(),
        }
    } , parentOrigin);
}

function sendActionStatusToAIF(status) {
    aifWindow.postMessage({
        type : 'actionStatus',
        payload : {
            ...aifObject
        }
    } , parentOrigin);
}
window.onload = ()=>{
    iframeLoaded = 'true';
    console.log('loaded window level')
};

function  checkFrameLoaded() {
    return true;
}

function executeAction(data){
    if(data.actionType === 'javaScript'){
        eval("(" + data.action+")()");
    }
}

