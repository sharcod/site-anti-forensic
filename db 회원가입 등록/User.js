const mongoose = require('mongoose') // mongoose 불러오기

// Schema 생성
const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      require: true,
    },
    adress: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

// model을 export 해주기
module.exports = User = mongoose.model('User', UserSchema)
/* const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User */
