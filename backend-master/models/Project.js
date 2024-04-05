// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize');
const user = require('./User')
const manufacturer = require('./Manufacturer')

// const project = sequelize.define("project_info",{
//      lab_name:{
//         type:DataTypes.STRING
//         },
//     project_type:{
//         type:DataTypes.STRING,
//         allowNull:false
//         },
//     project_number:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         primaryKey:true
//         },
//     project_name:{
//         type:DataTypes.STRING,
//         allowNull:false
//         },
//     description:{
//         type:DataTypes.TEXT
//         },
//     purchase_order_number:{
//         type:DataTypes.STRING
//         },
//     product_covered:{
//         type:DataTypes.STRING
//         },
//     modals:{
//         type:DataTypes.STRING
//         },
//     client_ready:{
//         type:DataTypes.DATEONLY
//         },
//     completion:{
//         type:DataTypes.DATEONLY
//         },
//     start_date:{
//         type:DataTypes.DATEONLY
//         },
//     end_date:{
//         type:DataTypes.DATEONLY
//         },
//     created_at:{
//        type:DataTypes.DATE
//     },
//     updated_at:{
//       type:DataTypes.DATE
//     }     
// },{
//     tableName:'project_info',
//     timestamps:false
// })

// project.belongsTo(user,{
//     as:'receiving_customer_fk',
//     foreignKey:{
//         name:'receiving_customer',
//         allowNull:false
//     }
// })

// project.belongsTo(user,{
//     as:'created_by_fk',
//     foreignKey:{
//         name:'created_by',
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })

// project.belongsTo(manufacturer,{
//     as:'projects_fk',
//     foreignKey:{
//         name:'transacting_customer',
//         allowNull:false
//     }
// })

// manufacturer.hasMany(project,{
//     as:'projects_fk',
//     foreignKey:{
//         name:'transacting_customer',
//         allowNull:false
//     }
// })

// project.sync()

// module.exports = project

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  lab_name: {
    type: String
  },
  project_type: {
    type: String,
    required: true
  },
  project_number: {
    type: String,
    required: true,
    unique: true
  },
  project_name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  purchase_order_number: {
    type: String
  },
  product_covered: {
    type: String
  },
  modals: {
    type: String
  },
  client_ready: {
    type: Date
  },
  completion: {
    type: Date
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  },
  receiving_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transacting_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
