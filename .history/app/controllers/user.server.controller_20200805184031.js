var mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.createUser = function(req, res) {
    var data = req.body;
    User.findOne({ username: req.body }, function(err, user) {
        if (err) {
            return res.status(400).send({
                message: 'Error while searching for existing user'
            });
        } else if (user) {
            return res.status(400).send({
                message: 'User already exists'
            });
        } else {
            var user = new User(data);
            user.save(function(saveErr, saveRes) {
                if (saveErr) {
                    return res.status(400).send({
                        message: 'Error while saving the user'
                    });
                }
            });
        }
    });
};