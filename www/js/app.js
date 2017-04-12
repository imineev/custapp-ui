define([
    'ojs/ojcore', 
    'knockout', 
    'jquery',
    'browser',
    'modules/layout'
], function(oj, ko, $, browser, layoutView) {
    var app;

    return (app = {
        name: 'Demo Customer Order Report',

        //** browser contains a set of responsive queries/tests for providing alternate UX from a code level
        browser: browser,

        initialize: function() {
            oj.Assert.forceDebug();
            //oj.Logger.option('level',	oj.Logger.LEVEL_INFO);

            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            ko.applyBindings(new layoutView(app), document.getElementById('page'));
        }

    });

});
