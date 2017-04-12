var connect = require('connect'),
    express = require('express'),
    path = require('path'),
    fs = require('fs'),
    qs = require('qs'),
    body = require('body-parser'),
    oracledb = require('oracledb'),
    config = require('./config');


/*
 * Create our Application, Define its middleware
 * ----
*/
var app = express();

app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use('/favicon.ico', function(req, res) { return res.end() });



/*
 * Define our JSON endpoints
 * ----
*/

app.get('/json/customer/list', function(req, res, next) {
    var hostString= process.env.HOST_IP;
	var connectString = hostString.concat(config.dbString);
	//** connect to the oracle db
	oracledb.getConnection({
		user: config.dbUser,
		password: config.dbPassword,
		connectString
	})
		.then(function(conn) {

			//** execute the list query to get the customers
			return conn.execute(config.listQuery)
				.then(function(result) {
					var rows = result.rows || [];

					//** map the nested arrays to a collection of json objects
					var list = rows.map(function(row) {
						return {
							id: row[0],
							name: row[1]
						};
					});
				
					//** send the json response
					sendJson(res, null, list);
				})
				.catch(function(err) {
					conn.close();
					throw err;
				});

		})
		.catch(function(err) {
			sendJson(res, err);
		});

});

app.get('/json/customer/:id', function(req, res, next) {
	var id = req.params.id;
    var hostString= process.env.HOST_IP;
	var connectString = hostString.concat(config.dbString);

	//** connect to the oracle db
	oracledb.getConnection({
		user: config.dbUser,
		password: config.dbPassword,
		connectString
	})
		.then(function(conn) {

			//** execute the list query to get the customers
			return conn.execute(config.singleQuery.replace('$', id))
				.then(function(result) {
					var rows = result.rows || [];

					//** map the nested arrays to a collection of json objects
					var list = rows.map(function(row) {
						return {
							id: row[0],
							timestamp: row[1],
							status: row[2],
							amount: row[3]
						};
					});

					sendJson(res, null, list);
				})
				.catch(function(err) {
					conn.close();
					throw err;
				});

		})
		.catch(function(err) {
			sendJson(res, err);
		});

});


/*
 * serve anything else as a static asset
*/
app.use(connect.static(__dirname));



/*
 * since this is a SPA, if it wasn't a static asset, redirect to root and respond
*/
app.use(function(req, res, next) {
    ((req.url = '/'), next());
});
app.use(connect.static(__dirname));




/*
 * Start the http server; override the port by specifying the PORT when launching, ex:
 *     $ PORT=9111 node server.js
 * ----
 *
*/
var port;
app.listen(port = process.env.PORT||9100);
console.log('listening on', port);







/*
 * Helper functions
 * ----
*/
function json(filePath, cb) {
    var pth = path.join(__dirname, filePath);

    fs.readFile(pth, 'utf8', function(err, data) {
        if(err) return cb(err);
        cb(null, data);
    });
}

function sendJson(res, err, json) {
    if(err) {
        res.statusCode = 500;
        return res.end();
    }

    if(typeof(json) === 'object')
        json = JSON.stringify(json);

    res.setHeader('Content-Type', 'application/json');
    res.end(json);
}
