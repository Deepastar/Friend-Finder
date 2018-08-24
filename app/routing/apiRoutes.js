var friendsList=require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
      });

      app.post("/api/friends", function(req, res) {
        var user1 = req.body;
        var scoreDifference = [];
        if (friendsList.length >1) {
            friendsList.forEach(user1);{
                var totalDiff=0;
                for(var i=0; i<user1.answers.length; i++){
                    var thisAns = user.answers[i]; 
                    var otherAns = user1.answers[i];
                    var scoreDiff = +otherAns - +thisAns;
                    totalDiff += Math.abs(scoreDiff);
                }
                scoreDifference.push(totalDiff);
            }

            var minDiff = math.min.apply(null, scoreDifference);
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