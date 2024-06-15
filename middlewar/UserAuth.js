const jwt = require('jsonwebtoken')
const { user } = require('../Models/User')
const UserAuth = async (req, res, next) => {
  let token;

  const { Authorization } = req.heders;
  console.log('Authorization=', Authorization);
  if (Authorization && Authorization.startsWidth('Bearer')) {
    token = Authorization.split(' ')[1]
    console.log('token--', token);
    const { userId } = jwt.verify(token, process.env.SECRECT_KEY)
    console.log('user id --', userId);
    req.user = await user.findById(userId)
    console.log('res.user---', req.user);
    next()
  }
  if (!token) {
    return res.json({
      status: 400,
      message: "unauthorised user"
    })
  }
}
module.exports = { UserAuth }

