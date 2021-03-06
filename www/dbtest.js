var oracledb = require('oracledb'),
	Q = require('q'),
	config = require('./config');

oracledb.getConnection({
	user: config.dbUser,
	password: config.dbPassword,
	connectString: config.dbString
})
	.then(function(conn) {

		//var query = "SELECT alpha.CUSTOMERS.CUSTOMER_ID CUSTOMER_ID, alpha.CUSTOMERS.PRINCIPAL_NAME PRINCIPAL_NAME, alpha.CUSTOMERS.TITLE TITLE, alpha.CUSTOMERS.FIRST_NAME FIRST_NAME, alpha.CUSTOMERS.LAST_NAME LAST_NAME, alpha.ADDRESSES1.ADDRESS1 ADDRESS1, alpha.ADDRESSES1.ADDRESS2 ADDRESS2, alpha.ADDRESSES1.CITY CITY, alpha.ADDRESSES1.POSTAL_CODE POSTAL_CODE, alpha.ADDRESSES1.STATE_PROVINCE STATE_PROVINCE, alpha.ADDRESSES1.COUNTRY_ID COUNTRY_ID, alpha.ADDRESSES1.LONGITUDE LONGITUDE, alpha.ADDRESSES1.LATITUDE LATITUDE, alpha.CUSTOMERS.CONFIRMED_EMAIL CONFIRMED_EMAIL, alpha.CUSTOMERS.PHONE_NUMBER PHONE_NUMBER, alpha.CUSTOMERS.MOBILE_PHONE_NUMBER MOBILE_PHONE_NUMBER, alpha.CUSTOMERS.REGISTERED_DATE REGISTERED_DATE, alpha.CUSTOMERS.CREDIT_LIMIT CREDIT_LIMIT, alpha.CUSTOMERS.DATE_OF_BIRTH DATE_OF_BIRTH, alpha.CUSTOMERS.MARITAL_STATUS_CODE MARITAL_STATUS_CODE, alpha.CUSTOMERS.GENDER GENDER, alpha.CUSTOMERS.CHILDREN_UNDER_18 CHILDREN_UNDER_18, alpha.CUSTOMERS.APPROXIMATE_INCOME APPROXIMATE_INCOME, alpha.CUSTOMERS.CONTACT_METHOD_CODE CONTACT_METHOD_CODE, alpha.CUSTOMERS.CONTACTABLE_FLAG CONTACTABLE_FLAG FROM alpha.CUSTOMERS INNER JOIN alpha.ADDRESSES ADDRESSES1 ON alpha.CUSTOMERS.PRIMARY_ADDRESS_ID = alpha.ADDRESSES1.ADDRESS_ID";
		var listQuery = "SELECT customer_id , concat(alpha.CUSTOMERS.FIRST_NAME, CONCAT( ' ', alpha.CUSTOMERS.LAST_NAME )) from alpha.customers";
        var singleQuery = "SELECT order_id, order_date,order_status_code, order_total from alpha.orders where customer_id like '3%'";

		console.log('connected!');

		return conn.execute(listQuery)
			.then(function(result) {

				console.log('got data');
				console.log(result.rows);
			})
			.catch(function(err) {
				conn.close();
				throw err;
			});

	})
	.catch(function(err) {
		console.log('error', err);
	});


