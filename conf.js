
//var myCustomReporter = require('./custom_reporter.js');

exports.config = {
  seleniumAddress: 'http://hub.testingbot.com/wd/hub',
  framework: 'jasmine',
  specs: ['e2e/test2.js'],
  // 1 TOTAL sessions across all capabilities
  capabilities: {
      'browserName' : 'chrome',
      'platform' : 'WIN10',
      'version' : '59',
      client_key: "53e1b3d62d1a0da61e96fb01c6d9d226",
      client_secret: "2f66b6b2f8d073cb82d526014bac1f5f"
    },
    onPrepare: function () {
       // jasmine.getEnv().clearReporters();
       // jasmine.getEnv().addReporter(new myCustomReporter());
       require("babel-register");
       browser.manage().window().maximize();
       browser.manage().timeouts().implicitlyWait(5000);
   }
};
