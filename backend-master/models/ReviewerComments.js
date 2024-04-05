// const sequelize = require('../database/DBConnection')
// const {DataTypes} = require('sequelize')
const mongoose = require('mongoose');
const user = require('./User')
const report = require('./Report')

// const comments = sequelize.define('reviewer_comments',{
//   id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true,
//     primaryKey:true
//   },
//   comment:{
//     type:DataTypes.TEXT,
//   },
//   recommendations:{
//     type:DataTypes.TEXT
//   },
//   created_at:{
//     type:DataTypes.DATE,
//     allowNull:false
//   }
// },{
//     timestamps:false,
//     tableName:'reviewer_comments'
// })

// comments.belongsTo(user,{
//     as:'reviewer_id_fk',
//     foreignKey:{
//         name:'reviewer_id',
//         allowNull:false
//     }
// })

// comments.belongsTo(report,{
//     as:'comments_fk',
//     foreignKey:{
//         name:'report_id',
//         allowNull:false
//     }
// })

// report.hasMany(comments,{
//     as:'comments_fk',
//     foreignKey:{
//         name:'report_id',
//         allowNull:false
//     }
// })

// //comments.sync()


// module.exports = comments



const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  recommendations: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  reviewer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
    required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
