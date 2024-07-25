define(['knockout', 'ojs/ojcontext', 'ojs/ojknockout'], {
    function (ko, Context) {
        function ControllerViewModel() {
            /* let router = new CoreRouter(navData, {
                urlAdapter: new UrlParamAdapter()
              });
              router.sync();
            this.moduleAdapter = new ModuleRouterAdapter(router); */

              this.ok = ko.observable('hello')

              
        }
        Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        return ControllerViewModel;
    }
})