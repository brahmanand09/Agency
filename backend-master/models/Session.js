// const sequelize = require('../database/DBConnection')
const mongoose = require('mongoose');
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);

// const {DataTypes} = require('sequelize');
// const session = require("express-session")
// var SequelizeStore  = require("connect-session-sequelize")(session.Store);

const user = require('./User');

// const crypto = require('crypto');

// const app = express();

// Generate a random string of 32 bytes
// const secret = crypto.randomBytes(32).toString('hex');




const sessionSchema = new mongoose.Schema({
  sid: String, // Use '_id' as the primary key, similar to 'sid' in Sequelize
  userId: String,
  expires: Date,
  data: String,
  created_at: Date
// }, {
//   timestamps: false
});

// Create a Mongoose model for Session
const SessionModel = mongoose.model('Session', sessionSchema);

// Create a function to extend default fields for session
// function extendDefaultFields(defaults, session) {
//   return {
//       data: defaults.data,
//       expires: defaults.expires,
//       userId: session.passport.user.userId,
//       created_at: session.passport.user.created_at
//   };
// }

// Create a new instance of ConnectSessionMongoDB to store sessions in MongoDB
// const mongoStoreOptions = {
//   mongooseConnection: mongoose.connection,
//   collection: 'sessions', // Use 'sessions' collection to store sessions in MongoDB
//   extendDefaultFields: extendDefaultFields
// };

// const sessionStore = new MongoStore({mongoStoreOptions});

module.exports = SessionModel;



// sequelize.define("session", {
//     sid: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//     },
//     userId: {
//         type:DataTypes.STRING
//     },
//     expires: {
//         type:DataTypes.DATE
//     },
//     data: {
//         type:DataTypes.TEXT
//     },
//     created_at : {
//         type:DataTypes.DATE
//     }
//   },{
//     timestamps:false
//   });

//   function extendDefaultFields(defaults, session) {
//     return {
//       data: defaults.data,
//       expires: defaults.expires,
//       userId: session.passport.user.userId,
//       created_at: session.passport.user.created_at
//     };
//   }

//   const sessionStore = new SequelizeStore({
//     db: sequelize,
//     table: "session",
//     extendDefaultFields: extendDefaultFields,
//   });

//   module.exports = sessionStore

  