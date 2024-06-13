const { user } = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const registration = async (req, res) => {
    try {
        const { name, email, Phone, password } = req.body;
        if (name && email && Phone && password) {
            const userExist = await user.findOne({ email })
            if (userExist) {
                return res.json({ status: 400, message: 'user is already Exist' })
            }
            const hashpassword = await bcrypt.hash(password, 10);

            const data = new user({
                name: name,
                email: email,
                password: hashpassword,
                Phone: Phone,
            })
            await data.save()
            return res.json({ status: 200, message: "Registartion sucessfully", data })
        }
        else {
            return res.json({ status: 400, message: "all filed required" })
        }
    } catch (error) {
        console.error(error);
        return res.json({ status: 500, message: "internal server error ", error });
    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const userExist = await user.findOne({ email })
            console.log(" userExist userExist", userExist);
            if (userExist) {
                const isMatch = await bcrypt.compare(password, userExist.password)
                console.log("isMatchisMatch", isMatch);
                if (isMatch && userExist.email == email) {
                    const secret = process.env.SECRECT_KEY
                    const token = jwt.sign({ userId: userExist._id, userEmail: userExist.email }, secret, { expiresIn: '5d' })
                    return res.json({
                        status: 200, message: "login sucessfully",
                        token
                    })
                }
                else {
                    return res.json({ status: 400, message: "somthing went to wrong" })
                }
            }
            else {
                return res.json({ status: 400, message: "User Not Found" })
            }
        }
        else {
            return res.json({ status: 400, message: "all filed required" })
        }
    } catch (error) {
        console.error(error);
        return res.json({ status: 500, message: "internal server error ", error });
    }

}
const Users = async (req,res)=>{
    try {
        const data = await  user.find()
        return res.json({status:200,message:"all data display sucess",data})
    } catch (error) {
        console.error(error);
        return res.json({ status: 500, message: "internal server error ", error });
    }
}
module.exports = { registration, login ,Users}