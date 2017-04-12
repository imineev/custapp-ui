var fs = require('fs'),
    Q = require('q'),
    path = require('path'),
    config = require('./config');


var fields = [
    'CUSTOMER_ID',
    'PRINCIPAL_NAME',
    'TITLE',
    'FIRST_NAME',
    'LAST_NAME',
    'ADDRESS1',
    'ADDRESS2',
    'CITY',
    'POSTAL_CODE',
    'STATE_PROVINCE',
    'COUNTRY_ID',
    'LONGITUDE',
    'LATITUDE',
    'CONFIRMED_EMAIL',
    'PHONE_NUMBER',
    'MOBILE_PHONE_NUMBER',
    'REGISTERED_DATE',
    'CREDIT_LIMIT',
    'DATE_OF_BIRTH',
    'MARITAL_STATUS_CODE',
    'GENDER',
    'CHILDREN_UNDER_18',
    'APPROXIMATE_INCOME',
    'CONTACT_METHOD_CODE',
    'CONTACTABLE_FLAG'
];

//** helper functions

function getMockData() {
    var def = Q.defer();

    fs.readFile(path.join(__dirname +'/js/data/mock-customers.json'), 'utf8', function(err, result) {
        if(err) return def.reject(err);

        var json, data;

        try {
            json = JSON.parse(result);
            data = [];

            //** since we get an array of arrays, map each array to a JSON object by its field index and the field list above.  we keep
            //** it this way since the oracledb driver gives us data this way
            (json.result||[]).forEach(function(item) {
                var itemJson = {};
                (item||[]).forEach(function(obj, idx) {
                    itemJson[fields[idx]] = obj;
                });

                data.push(itemJson);
            });

        } catch(e) {
            return def.reject(e);
        }

        //** return an array of JSON objects
        def.resolve(data);
    });

    return def.promise;
}

function getDbData() {
}


//** service facade

var dataSvc = {
    load: function() {
        console.log('dataSvc.load['+ config.env +']');

        if(config.env == 'prod')
            return getDbData();

        return getMockData();
    }
};


module.exports = dataSvc;
