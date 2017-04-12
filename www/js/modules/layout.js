define([
    'ojs/ojcore', 
    'knockout',
    'jquery',
	'data/customerService'
], function(oj, ko, $, customerService) {

    function viewModel(app) {
        /*
         * view model's bindable properties
        */
        var view = this;
        this.router = app.router;
        this.browser = app.browser;
        this.customer = ko.observable();
        this.customers = ko.observableArray([]);


        /*
         * helper functions
        */



        /*
         * event handlers
        */

        this.onSelectCustomer = function(obj, e) {
            var customer = obj;

			customerService.get(customer.id).then(function(data) {
				console.log('data: ', data);

				var amount = 0;
				data.forEach(function(item) {
					amount += item.amount || 0;
				});

				obj.total = '$'+ amount;
				obj.orders = data.length || 0;
				view.customer(customer);
			});

        }


		//** get the customer list, render the customers, show the UI
		customerService.list().then(function(data) {
			view.customers(data);
            $('main').addClass('init');
		});

    };

    return viewModel;

});
