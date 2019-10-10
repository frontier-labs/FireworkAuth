var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String
    },
    middlename: {
        type: String
    },
    lastname : {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String
    },
    email: {
        type: String
    },
    mobile_no: {
        type: Number
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);