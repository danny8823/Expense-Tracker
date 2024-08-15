const asyncHandler = require('express-async-handler')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// ! User registration

const usersController = {
    // ! Register
    register: asyncHandler( async (req,res) => {
        const {username, email, password} = req.body;

        // * VALIDATE
        if(!username || !email || !password) {
            throw new Error ('Please all fields are required.')
        } 

        const userExists = await User.findOne({
            email
        })

        if(userExists) {
            throw new Error ('This user exists')
        }

        // ! HASH THE USER PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // ! CREATE THE USER AND SAVE INTO DB
        const userCreated = await User.create({
            username, email, password: hashedPassword
        })

        // ! SEND THE RESPONSE
        res.json({
            username: userCreated.username,
            email: userCreated.email,
            id: userCreated._id
        })
    }),

    // ! ========== Login
    login: asyncHandler(async (req,res) => {
        // ! Get the user data
        const { email, password } = req.body;
        // ! Check if email is correct
        const user = await User.findOne({
            email
        })
        if(!user){
            throw new Error('Invalid login credentials')
        }
        // ! Compare the user password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error ('INVALID email.')
        }

        // ! Generate a token 
        const token = jwt.sign({
            id: user._id
        }, 'dannyboy',{
            expiresIn: '30d'
        })

        // ! Send the response 
        res.json({
            message:'Login Success',
            token,
            id: user._id,
            email: user.email,
            username: user.username
        })
    })
    // ! Profile
}

module.exports = usersController;