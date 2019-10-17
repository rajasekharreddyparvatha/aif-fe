class ActionsQueue {

    constructor(){
        console.log('test');
    }

    setActions(app, actions, actionsExecutionsFlow){
        if(actionsExecutionsFlow && actionsExecutionsFlow.length > 0){
            this.actionsExecutionsFlow = [...actionsExecutionsFlow.reverse()];
            this.actions = actions;
            this.app = app;
        }

    }

    getAllActions(){
        return this.actions;
    }

    getNextAction(){
        if(this.actionsExecutionsFlow.length <= 0){
            return {};
        }
        let actionName = this.actionsExecutionsFlow.pop();
        return this.actions.find((action, index) =>{
            if(action.actionName == actionName){
                return true;
            }
        } );
    }

    removeAction(removeActionName){
        this.actionsExecutionsFlow = this.actionsExecutionsFlow.filter(actionName => {
            if(removeActionName === actionName){
                return false;
            }
        })
    }

    setFailedAction(actionName){
        this.actionsExecutionsFlow.push(actionName);
    }

    getLengthOFActions() {
        return this.actionsExecutionsFlow.length;
    }
};
export default new ActionsQueue();