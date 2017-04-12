module.exports = {
	dbUser: "ALPHA",
	dbPassword: "alpha",
	dbString: "/ORCLPDB1",
	listQuery: "SELECT customer_id , concat(alpha.CUSTOMERS.FIRST_NAME, CONCAT( ' ', alpha.CUSTOMERS.LAST_NAME )) from alpha.customers",
	singleQuery: "SELECT order_id, order_date,order_status_code, order_total from alpha.orders where customer_id like '$%'"
};
