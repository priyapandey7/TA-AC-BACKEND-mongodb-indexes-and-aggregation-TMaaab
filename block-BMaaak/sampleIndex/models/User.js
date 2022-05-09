const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String},
    username : {type : String},
    email : {type: String, unique : true},
    address : {
        city :  {type : String},
        state : {type : String, unique : true},
        country : {type : String},
        pin : {type : String}
    }
});
// 1. Define unique indexes on username and email.
// 2. define compound indexes on state and country field inside address document. Each country must have states which are unique.
userSchema.index({username : 1},{email : 1}, {unique : true});
userSchema.index({'address.country': 1,'address.state':1}, {unique: true});

module.exports  = mongoose.model('User', userSchema);