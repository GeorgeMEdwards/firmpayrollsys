const mongoose = require('mongoose');

const empasswordSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required :true,
        unique : true
    },
    password:{
        type:String,
        required : true
    },
    eid :{
        type: Number,
        required : true,
        unique : true
    }

});

const empassword = mongoose.model('empassword',empasswordSchema);
module.exports = empassword;