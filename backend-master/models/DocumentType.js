// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')

// const documentType = sequelize.define('document_type',{
//   id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true,
//     allowNull:false,
//     primaryKey:true
//   },
//   name:{
//     type:DataTypes.STRING,
//     allowNull:false
//   }

// },{
//     timestamps:false,
//     tableName:'document_type'
// })

// //documentType.sync()

// module.exports = documentType


const mongoose = require('mongoose');

const documentTypeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true
  }
});

const DocumentType = mongoose.model('DocumentType', documentTypeSchema);

module.exports = DocumentType;
