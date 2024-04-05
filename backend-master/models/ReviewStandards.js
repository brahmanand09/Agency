// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')

// const reviewStandards = sequelize.define('review_standards',{
//    id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true,
//     primaryKey:true
//    },
//    description:{
//     type:DataTypes.TEXT
//    },
//    standard_type:{
//     type:DataTypes.STRING,
//     allowNull:false
//    },
//    standard:{
//     type:DataTypes.STRING,
//     allowNull:false
//    }
// },{ 
//     timestamps:false,
//     tableName:'review_standards'
// }) 

// //reviewStandards.sync()

// module.exports = reviewStandards

const mongoose = require('mongoose');

const reviewStandardSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    description: {
        type: String
    },
    standard_type: {
        type: String,
        required: true
    },
    standard: {
        type: String,
        required: true
    }
}, { timestamps: false, collection: 'review_standards' });

const ReviewStandard = mongoose.model('ReviewStandard', reviewStandardSchema);

module.exports = ReviewStandard;
