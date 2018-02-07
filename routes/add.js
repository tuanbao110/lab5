var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var name = req.query.name;
    var description = req.query.description;
    var imageURL = 'http://lorempixel.com/400/400/people'

    console.log("The name is: " + name);
    console.log("The description is: " + description);

    var newFriend = {name, description, imageURL};

    data.friends.push(newFriend);

    res.render('index', data);
};
