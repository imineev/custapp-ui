/*
 * Create a very simple customer data service to get a list of objects, and find individual customers
 * by id.  Uses promises to simulate async.
*/
define([
    'ojs/ojcore', 
    'knockout', 
    'jquery'
], function(oj, ko, $) {
    var svc;
    var idMap = {};
    var dataSource = [];


    /*
     * http helpers
     */
    function request(url, type, data) {
        url && url[0] == '/' && (url = url.substring(1));

        //** create a common set of ajax options, specifically for json req/res
        var opt = {
            data: data,
            cache: false,
            url: url,
            type: type||'POST',
            dataType: 'json',
            contentType: 'application/json'
        };

        try {
            //** serialize any json objects for transport
            if(typeof(opt.data) === 'object')
                opt.data = JSON.stringify(opt.data);
        } catch(e) {}

        var def = $.Deferred(),
            prm = def.promise();

        //** make the request, handle the response, resolve/reject the promise
        $.ajax(opt)
            .fail(function(e) { def.reject(e && e.responseJSON) })
            .done(function(res) { def.resolve(res.response || res) });

        return prm;
    }

    request.get = function(url) { return request(url, 'GET'); }


    /*
     * the customer data service
    */
    return (svc = {
        idField: 'id',

        list: function(opt) {
			opt = opt || {};

            //** map any options
            !!opt.idField && (svc.idField = opt.idField);

            //** get the customer data from the server
            return request.get('/json/customer/list').then(function(data) {
                var data = data||[];

                //** memoize the objects by id
                idMap = {};
                data.forEach(function(obj) {
                    !!obj[svc.idField] && (idMap[obj[svc.idField]] = obj);
                });

                return (dataSource = data);
            });
        },

        get: function(id) {
            //** get the customer by id
            return request.get('/json/customer/'+ id).then(function(data) {
				return data || [];
            });
        },



        find: function(id, cache) {
            return new Promise(function(res, rej) {
                if(idMap[id])
                    return res(idMap[id]);

                rej('Could not find the customer by id: '+ id);
            });
        }
    });
});
