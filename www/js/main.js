requirejs.config({
    //** always load from the './js' directory, relative to where this app is hosted
	baseUrl: location.protocol +'//'+ location.host + location.pathname +'/js',

	paths: {
        //** JET core libs
		'knockout': 'libs/knockout/knockout-3.4.0',
		'knockout-amd-helpers': 'libs/knockout/knockout-amd-helpers',
		'jquery': 'libs/jquery/jquery-2.1.3',
		'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
		'promise': 'libs/es6-promise/promise-1.0.0.min',
		'hammerjs': 'libs/hammer/hammer-2.0.4.min',
		'ojs': 'libs/oj/v2.1.0/min',
		'ojL10n': 'libs/oj/v2.1.0/ojL10n',
		'ojtranslations': 'libs/oj/v2.1.0/resources',
		'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
		'signals': 'libs/js-signals/signals',
		'text': 'libs/require/text'
	},

	shim: {
        'jquery': {
			exports: ['jQuery', '$']
		},

		'jqueryui': {
			deps: ['jquery']
		}
	}
});

require([
    'app',
    'knockout',
    'text',

    //** these need only be included once...
    'promise',
    'knockout-amd-helpers',

    //** preload specific JET modules to be used in the app
    'ojs/ojknockout', 
    'ojs/ojbutton', 
    'ojs/ojmenu', 
    'ojs/ojtoolbar', 
    'ojs/ojinputtext', 
    'ojs/ojnavigationlist',
    'ojs/ojoffcanvas', 
    'ojs/ojarraytabledatasource', 
    'ojs/ojmodule', 
    'ojs/ojrouter'
], function(app, ko) {

    //** setup the paths/extensions used for modules and templates (modelPath refers to the ViewModels aka modules)
    oj.ModuleBinding.defaults.modelPath = 'modules/';
    oj.ModuleBinding.defaults.viewPath = 'text!../templates/';
    oj.ModuleBinding.defaults.viewSuffix = '.tmpl';
    ko.amdTemplateEngine.defaultPath = "../templates";
    ko.amdTemplateEngine.defaultSuffix = ".tmpl";

    //** initialize the application when the dom is ready
    $(app.initialize.bind(app));

});
