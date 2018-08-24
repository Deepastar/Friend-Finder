var path = require('path');
var friendsList=require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        friendsList.forEach(function(myval) { console.log("get: " + JSON.stringify(myval));});
        res.json(friendsList);
      });

      app.post("/api/friends", function(req, res) {
        var user1 = req.body;
        var scoreDifference = [];

        friendsList.forEach(function(myval) { console.log("Post: " + JSON.stringify(myval));});

        if (friendsList.length > 1) {
            friendsList.forEach( function(curruser){
                var totalDiff=0;
                for(var i=0; i<user1.scores.length; i++){
                    var thisAns = curruser.scores[i]; 
                    var otherAns = user1.scores[i];
                    var scoreDiff = otherAns - thisAns;
                    totalDiff += Math.abs(scoreDiff);
                }
                scoreDifference.push(totalDiff);
            });

            var minDiff = Math.min.apply(null, scoreDifference);
            var bestMatch = [];
            for(var i=0; i<scoreDifference.length; i++) {
                if (scoreDifference[i] === minDiff){
                    bestMatch.push(friendsList[i]);
                }
            }
            res.json(bestMatch);
        }
        else{
            res.json(friendsList);
        }
        
        friendsList.push(user1);
    });
};