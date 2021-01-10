//Router controller that will manage database and identify our endpoint

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//Router GET & POST
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
    router.post("/api/burgers", function (req, res) {
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function (result) {
                //Send back the ID of new Burger
                res.json({ id: result.insertId });
            }
        );
    });
    //Router PUT
    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.updateOne({devoured: req.body.devoured}, condition, function (result) {
            if ((result.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    //Router Delete
    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function (result) {
            if ((result.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

module.exports = router;