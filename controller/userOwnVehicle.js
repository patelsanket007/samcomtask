const User = require('../models/user');

exports.createUser = (req, res) => {
    const user = new User(req.body);
    user.save()
    .then((result) => {
        return res.status(200).json({
            message: 'User created!!',
            user: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    })
}