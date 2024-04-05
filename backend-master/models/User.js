// const db = require('../database/DBConnection')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        unique: true,
        required: true,
    },
    password :{
        type: String,
        required: false,
    },
    email:{
        type: String,
        unique:true,
        required: false,
    },
    phone_number:{
        type:Number,
        unique: true,
        required: false,
    },
    is_engineer:{
        type:Boolean,
        required: false,
    },
    is_reviewer:{
        type:Boolean,
        required: false,
    },
    agency_id:{
        type:String,
    },
    lab_id:{
        type:String,
    }
})

//user.sync()

const User = mongoose.model("user", userSchema);
module.exports = User;



// const db = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')


// const user = db.define("user",{
//     id:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         primaryKey:true
//     },
//     name:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     password :{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     email:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     phone_number:{
//         type:DataTypes.STRING,
//     },
//     is_engineer:{
//         type:DataTypes.BOOLEAN,
//         defaultValue:false
//     },
//     is_reviewer:{
//         type:DataTypes.BOOLEAN,
//         defaultValue:false
//     },
//     agency_id:{
//         type:DataTypes.STRING
//     },
//     lab_id:{
//         type:DataTypes.STRING
//     }
// },{
//     tableName:"user",
//     timestamps:false
// })

// //user.sync()

// module.exports = user