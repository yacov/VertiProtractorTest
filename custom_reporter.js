
'use strict';

var TestingBot = require('testingbot-api');
var tb = new TestingBot({
    api_key: "53e1b3d62d1a0da61e96fb01c6d9d226",
    api_secret: "2f66b6b2f8d073cb82d526014bac1f5f"
});

var myCustomReporter = {
    jasmineStarted: function(suiteInfo) {
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
        console.log('Reporting via MyCustomReporter');
    },

    suiteStarted: function(result) {
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specStarted: function(result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specDone: function(result) {
        tb.updateTest({
            'test[name]' : result.description,
            'test[success]' : result.status
        }, browser.sessionId, function(done) {});
    },

    suiteDone: function(result) {
    },

    jasmineDone: function() {
        console.log('Finished suite');
    }
};

module.exports = myCustomReporter;
