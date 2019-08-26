const bcrypt = require('bcryptjs');
const Users = require('./users/users-model.js');

module.exports = function restricted(req, res, next){
    const {username, password } = req.headers;

    if(username && password){

    }else{
        res.status(400).json({message : 'Please provide valid Credentialls'})
    }
}