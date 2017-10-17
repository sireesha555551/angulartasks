var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create the schema
var UserSchema = new Schema({

    location:{ 
        type:String,
        index:true

    },

     
  destination : {
        type : String,
        unique : true,
        index : true
    },
    uid:{
        type:String,
        index:true
    },
    time:{
        type:Date,
        default:Date.now
    }
    
});


var User = module.exports = mongoose.model('rides',UserSchema);