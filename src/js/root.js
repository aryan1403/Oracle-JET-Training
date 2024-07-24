
 require(['ojs/ojbootstrap', 'knockout', './appController', 'ojs/ojlogger', 'ojs/ojknockout',
 'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar'],
 function (Bootstrap, ko, app, Logger) { // this callback gets executed when all required modules are loaded
   Bootstrap.whenDocumentReady().then(
    function() {
      function init() {
        // Bind your ViewModel for the content of the whole page body.
        ko.applyBindings(app, document.getElementById('globalBody'));
      }
      // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
      // event before executing any code that might interact with Cordova APIs or plugins.
      if (document.body.classList.contains('oj-hybrid')) {
        document.addEventListener("deviceready", init);
      } else {
        init();
      }
    });
 }
);
