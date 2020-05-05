// Retrieve from the connection.js file.
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var orm = {

    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw (err);

            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {

        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"

        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw (err);

            cb(result);
        });
    },
    updateOne: function (eatenTrue, burgerID, cb) {

        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

        connection.query(queryString, [eatenTrue, burgerID], function (err, result) {
            if (err) throw (err);

            cb(result);
        });
    },
    clearAll: function (cb) {
        var queryString = "DELETE from burgers"

        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            
            cb(result);
        });
    },
};


module.exports = orm;