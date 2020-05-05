var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {

    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        // console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {

    var newBurger = req.body.newBurger;

    burger.insertOne(newBurger, function (result) {

        // Send back the ID of the new burger
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {

    var burgerID = req.params.id;
    var eatenTrue = 1;

    burger.updateOne(eatenTrue, burgerID, function (result) {

        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/burgers", function (req, res) {

    burger.clearAll(function (result) {
        res.status(200).end();
    });
});



module.exports = router;