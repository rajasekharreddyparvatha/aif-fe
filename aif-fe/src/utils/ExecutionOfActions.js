/**
 * Created by rajasekhar on 02-Nov-18.
 */
import ActionsQueue from '../../src/utils/ActionsQueue';
let refReceiveEventFromIframe = undefined;
var self = undefined;
class ExecutionOfActions {

    constructor(appIframeInstance){
        this.appIframeInstance = appIframeInstance.ifr;
        this.iframeInfo = {
            iframeLoaded : false
        };
        this.actionsStatus = {};
    }

    executeActionsOnIFrame(){
        this.executeActions();
    }

    async executeActions() {
        self = this
        let length = ActionsQueue.getLengthOFActions();
        try{
            for(var index = 0; index < length; index++ ){
                if(await this.isIframeLoaded()){
                    var action = ActionsQueue.getNextAction();
                    if(action.actionType == 'javaScript'){
                        this.actionsStatus[action.actionName] = 'inProgress';
                        this.executeAction(action);
                    }
                    if( await this.isActionCompleted(action.actionName) ){
                    }
                }
            }
        }catch (e){
            console.error(e);
        }

    }
    isActionCompleted(actionName){
        return new Promise((resolve, reject) => {
            let index = 0;
            var interval = setInterval(()=>{
                if(index < 3){
                    if( self.actionsStatus[actionName] === 'completed' ){
                        resolve(true);
                        clearInterval(interval)
                    } else {
                        self.findStatusOfAction(actionName);
                        index++;
                    }
                }else {
                    clearInterval(interval);
                    reject("action did not executed");
                }
            }, 250)

        });
    }

    setStatusOfAction(data){
        this.actionsStatus[data.action.actionName] = data.actionStatus;
    }



    isIframeLoaded(appId){
        return new Promise((resolve, reject) => {
            let index = 0;
            var interval = setInterval(()=>{
                if(index < 6){
                    if( self.iframeInfo.iframeLoaded ){
                        resolve(true);
                        self.iframeInfo.iframeLoaded = false;
                        clearInterval(interval)
                    } else {
                        self.sendIsIframeLoadedEvent();
                        index ++;
                    }
                } else {
                    clearInterval(interval);
                    reject("frame didn't load ")
                }
            }, 550)

        });
    }
    updateIframeLoadedValue(data){
        this.iframeInfo['iframeLoaded'] = data.isIframeLoaded;
    }

    sendIsIframeLoadedEvent(){
        if(this.appIframeInstance && this.appIframeInstance.contentWindow){
            this.appIframeInstance.contentWindow.postMessage({
                type : 'isIframeLoaded',
                payload : {iframeName : 'appId'}
            }, '*');
        }
    }

    executeAction(data){
        // var javascrFunction = undefined;
        // eval(data.action);
        // javascrFunction();
        this.appIframeInstance.contentWindow.postMessage({
            "type" : "executeAction",
            "payload" : { action  : data }
        }, '*');
    }

    findStatusOfAction(actionName){
        if(this.appIframeInstance && this.appIframeInstance.contentWindow){
            this.appIframeInstance.contentWindow.postMessage({
                type : 'actionStatus',
                payload : { actionName : actionName }
            }, '*');
        }
    }
}

function receiveEventFromIframe(event) {
    // if(event.origin == '*'){
    let data = event.data;
    switch(data.type){
        case "isIframeLoaded" : self.updateIframeLoadedValue(data.payload);
                                break;
        case "actionStatus" : self.setStatusOfAction(data.payload);
                                break;
    }
    // }
    return;
}
window.addEventListener('message', receiveEventFromIframe, false);
export default ExecutionOfActions;