var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {
        orm.insertOne(burgerName, function (result) {
            cb(result);
        });
    },
    updateOne: function (eatenTrue, burgerID, cb) {
        orm.updateOne(eatenTrue, burgerID, function (result) {
            cb(result);
        });
    },
    clearAll: function (cb) {
        orm.clearAll(function (result) {
            cb(result);
        });
    },
};

module.exports = burger;