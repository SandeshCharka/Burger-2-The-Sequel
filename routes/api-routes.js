var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {


        db.burger.findAll({
            order: [
                ['burger_name', 'ASC'],
            ]
        }).then(function (data) {

            // console.log(data[0].dataValues.burger_name);
            // console.log(JSON.stringify(data));

            // console.log(data);

            var hbsObject = {
                burgers: data
            };

            res.render("index", hbsObject);

        });
    });

    app.post("/api/burgers", function (req, res) {

        var newBurger = req.body.newBurger;

        db.burger.create({
            burger_name: newBurger,
        }).then(function (result) {
            
            res.json({
                id: result.dataValues.id
            })
            // console.log(result.dataValues.id);
        })

    });

    app.put("/api/burgers/:id", function (req, res) {

        var burgerID = req.params.id;
        var eatenTrue = 1;

        db.burger.update({
            devoured: 1,
        }, {
            where: {
                id: burgerID,
            }
        }).then(function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        });
    });

    app.delete("/api/burgers", function (req, res) {

        db.burger.destroy({
            // This method will reset the Id values
            // truncate: true,
            where: {

            },
        }).then(function (result) {

            res.status(200).end();

        });
    });
};