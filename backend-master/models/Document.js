// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')
const mongoose = require('mongoose');
const user = require('./User');
const report = require('./Report');
const documentType = require('./DocumentType');

// const document = sequelize.define('report_documents',{
//     file_id:{
//         type:DataTypes.STRING,
//         primaryKey:true,
//         allowNull:false
//     },
//     original_file_name:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     storage_file_name:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     created_at:{
//         type:DataTypes.DATE
//     },
//     updated_at:{
//         type:DataTypes.DATE
//     },
//     type:{
//         type:DataTypes.STRING
//     },
//     isDeleted:{
//         type:DataTypes.BOOLEAN,
//         allowNull:false,
//         defaultValue:false
//     } 
// },{
//     tableName:'report_documents',
//     timestamps:false
// })

// document.belongsTo(user,{
//     as:'submitted_by_fk',
//     foreignKey:{
//         name:"submitted_by",
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })

// document.belongsTo(report,{
//     as:'report_id_fk',
//     foreignKey:{
//         name:'report_id',
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })

// report.hasMany(document,{
//     as:'report_id_fk',
//     foreignKey:{
//         name:'report_id',
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })

// document.belongsTo(documentType,{
//     as:'document_type_fk',
//     foreignKey:{
//         name:'sub_type',
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })

// documentType.hasMany(document,{
//     as:'document_type_fk',
//     foreignKey:{
//         name:'sub_type',
//         allowNull:false
//     },
//     onDelete:'CASCADE'
// })


// //document.sync({alter:true})

// module.exports = document


const documentSchema = new mongoose.Schema({
  file_id: {
    type: String,
    required: true,
    unique: true
  },
  original_file_name: {
    type: String,
    required: true
  },
  storage_file_name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  type: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  submitted_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'report',
    required: true
  },
  sub_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'documentType',
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
