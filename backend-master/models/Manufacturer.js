// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')


// const manufacturer = sequelize.define("manufacturer",{
//   id:{
//     type:DataTypes.STRING,
//     primaryKey:true,
//     allowNull:false
//   },
//   name:{
//     type:DataTypes.STRING,
//     allowNull:false
//   },
//   company_name:{
//     type:DataTypes.STRING,
//     allowNull:false
//   },
//   email:{
//     type:DataTypes.STRING,
//   },
//   phone_number:{
//     type:DataTypes.STRING,
//   },
//   created_at:{
//     type:DataTypes.DATE
//   }
// },{
//     tableName:'manufacturer',
//     timestamps:false
// })


// //manufacturer.sync()

// module.exports = manufacturer

const mongoose = require('mongoose');

// Define a Mongoose schema for the manufacturer collection
const manufacturerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone_number: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model for the manufacturer collection
const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;
