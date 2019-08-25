const mongoose = require('mongoose');
const schema =  mongoose.Schema({
yourname :  String,
youremail : String,
yourmessage : String
})

module.exports = mongoose.model('contact', schema)