/**
 * Created by rajasekhar on 05-Mar-19.
 */
import fetch from '../../core/fetch'
import CONST from './constants'
import URLs from '../../core/urls'
export  default class Actions {
    static async getApps(dipatch){
        try {
            // const resp = await fetch(URLs.getApps, {  hjwbfsaofeweifei
            //     credentials: 'include'
            // });
            // const dataPromise = await resp.json();
            const payload = await Promise.resolve({apps: [
                {
                    "appTitle": "Client On-Boarding and Provisioning",
                    "appId": "cobp",
                    "appType" : "general",
                    "baseURL": "http://cob.rajasekhar-inc.net:3000/",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "/clients",
                    "aliasNames": [
                        "create client"
                    ],
                    "features": [{
                        "label": "Create client",
                        "featureId": "createClient",
                        "url": "/clients/create",
                        "params": [
                        ],
                        "searchKeywords": [
                            "Create client"
                        ]
                    }, {
                        "label": "List Accounts",
                        "featureId": "listAccounts",
                        "url": "/listLOB/testt",
                        "params": [],
                        "searchKeywords": [
                            "create account"
                        ]
                    },{
                        "label": "Create Account",
                        "featureId": "createAccount",
                        "url": "/listLOB/testt",
                        "params": [],
                        "searchKeywords": [
                            "create account"
                        ],
                        "actionsExecutionFlow": [
                            "clickCreateAcctBtn"
                        ],
                        "actions": [{
                            "actionName": "clickCreateAcctBtn",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementsByName('createLOBBtn')[0].click()}"
                        }
                        ]
                    }
                    ]
                },
                {
                    "appTitle": "Assist Admin Console",
                    "appId": "assistAdminConsole",
                    "appType" : "general",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ],
                    "features": [{
                        "label": "Create Queue",
                        "featureId": "createQueue",
                        "url": "",
                        "params": [
                        ],
                        "searchKeywords": [
                            "Create Queue"
                        ],
                        "actionsExecutionFlow": [
                            "openQueue", "clickOnAddQueue"
                        ],
                        "actions": [{
                            "actionName": "openQueue",
                            "actionType": "javaScript",
                            "action": "function(){var table = document.getElementById('breeze_admin_AdminEntityList_0'); table.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].click()}"
                        }, {
                            "actionName": "clickOnAddQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('breeze_history_AdminGridPanel_0').getElementsByClassName('admin-add-icon')[0].click()}"
                        }
                        ]
                    }, {
                        "label": "Add Skill to Queue",
                        "featureId": "addSkilltoQueue",
                        "url": "",
                        "params": [],
                        "searchKeywords": [
                            "add skill to queue"
                        ],
                        "actionsExecutionFlow": [
                            "openQueue", "clickOnAddQueue", "addSkillToQueue"
                        ],
                        "actions": [{
                            "actionName": "openQueue",
                            "actionType": "javaScript",
                            "action": "function(){var table = document.getElementById('breeze_admin_AdminEntityList_0'); table.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].click()}"
                        }, {
                            "actionName": "clickOnAddQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('breeze_history_AdminGridPanel_0').getElementsByClassName('admin-add-icon')[0].click()}"
                        }, {
                            "actionName": "addSkillToQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('dijit_layout_TabContainer_1_tablist_dijit_layout_ContentPane_4').click()}"
                        }
                        ]
                    }
                    ]
                },
                {
                    "appTitle": "Vistior Experience",
                    "appType" : "general",
                    "appId": "vistiorExperience",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Reports",
                    "appType" : "general",
                    "appId": "reports",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "User Management",
                    "appType" : "general",
                    "appId": "userManagement",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Archive Account",
                    "appType" : "general",
                    "appId": "archiveAccount",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Prediction Console",
                    "appType" : "chat",
                    "appId": "predictionConsole",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Create New APP",
                    "appType" : "AIVADigital",
                    "appId": "createNewAPP",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Unified Admin Console",
                    "appType" : "chat",
                    "appId": "unifiedAdminConsole",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ]
                },
                {
                    "appTitle": "Manage nikefootballbot",
                    "appType" : "AIVADigital",
                    "appId": "manageNikefootballbot",
                    "baseURL": "http://lnd.portal.dev.assist.rajasekhar-inc.net/en/console",
                    "domain": "rajasekhar-inc.net",
                    "canSuspend": "false",
                    "author": {
                        "adminName": "admin",
                        "adminMail": "admin@rajasekhar-inc.com"
                    },
                    "homePageURL": "",
                    "aliasNames": [
                        "create client"
                    ],
                    "features": [{
                        "label": "Create Queue",
                        "featureId": "createQueue",
                        "url": "",
                        "params": [
                        ],
                        "searchKeywords": [
                            "Create Queue"
                        ],
                        "actionsExecutionFlow": [
                            "openQueue", "clickOnAddQueue"
                        ],
                        "actions": [{
                            "actionName": "openQueue",
                            "actionType": "javaScript",
                            "action": "function(){var table = document.getElementById('breeze_admin_AdminEntityList_0'); table.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].click()}"
                        }, {
                            "actionName": "clickOnAddQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('breeze_history_AdminGridPanel_0').getElementsByClassName('admin-add-icon')[0].click()}"
                        }
                        ]
                    }, {
                        "label": "Add Skill to Queue",
                        "featureId": "addSkilltoQueue",
                        "url": "",
                        "params": [],
                        "searchKeywords": [
                            "add skill to queue"
                        ],
                        "actionsExecutionFlow": [
                            "openQueue", "clickOnAddQueue", "addSkillToQueue"
                        ],
                        "actions": [{
                            "actionName": "openQueue",
                            "actionType": "javaScript",
                            "action": "function(){var table = document.getElementById('breeze_admin_AdminEntityList_0'); table.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].click()}"
                        }, {
                            "actionName": "clickOnAddQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('breeze_history_AdminGridPanel_0').getElementsByClassName('admin-add-icon')[0].click()}"
                        }, {
                            "actionName": "addSkillToQueue",
                            "actionType": "javaScript",
                            "action": "function(){document.getElementById('dijit_layout_TabContainer_1_tablist_dijit_layout_ContentPane_4').click()}"
                        }
                        ]
                    }
                    ]
                },

            ]});
            dipatch({
                type: CONST.SET_APPS,
                value: payload,
            });
        }catch (e){
            dipatch({
                type: CONST.SET_APPS_FAILED,
                value: e.message,
            });
        }
    }

}