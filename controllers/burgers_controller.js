//Require packages and files
var express = require('express'),
router = express.Router(),
//Import the model (burger.js) to use its database functions.
food = require('../models/burger.js');

//Create all our routes and set up logic within
route.get("/", function(req,res){
    food.selectAll(function(data){
        console.log(data);
        var hbsObject = {
            foods: data
        };
        //console.log(hbsOjects);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req,res){
    //Columns, [forminput, boolean = false;]
    food.insertOne(["burger_name", "devoured"], [req.body.burger_name, "0"], function(){
        res,redirect("/");
    });
});
rouetr.put("/:id", function(req,res){
    var condition = "id = "+ req.params.id;
    console.log("condition", condition);

    food.updateOne({
        devoured: req.body.devoured
    }, condition, function(){
        res.redirect("/");

    });
});

router.delete('/:id', function(req, res) {
var condtion = "id = "+ req.params.id;
console.log("condition", condition);
food.deleteOne(condition, function() {
    res.redirect('/');
});

    
});

module.export = router;