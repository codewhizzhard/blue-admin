const asyncHandler = require("express-async-handler");
/* const {username, email, password} = require("") */
const bcrypt = require("bcrypt");
const users = require("../models/userModel");
const jwt = require("jsonwebtoken")


const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("all field madatory");
    }
    const userAvailable = await users.findOne({email})
    if (userAvailable) {
        res.status(400);
        throw new Error("user already registered");
    }
    ///hash password
    const hashpassword = await bcrypt.hash(password, 10)
    console.log("hashed", hashpassword)
    const user = await users.create({
        username, email, password: hashpassword
    })
    console.log("user created", user)
    if (user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("user field not valid")
    }
    res.json({message: "register user"});
})

const login = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
     if ( !email || !password) {
        res.status(400);
        throw new Error("all field madatory");
    }
     const userAvailable = await users.findOne({email})
     console.log("availableUser", userAvailable)
         const isMatch = await bcrypt.compare(password, userAvailable.password);
        if (userAvailable && isMatch) {
            const accessToken = jwt.sign({
                user: {
                    username: userAvailable.username,
                    email: userAvailable.email,
                    id: userAvailable.id
                }
            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "60m"})
            res.status(200).json({accessToken})
        } else {
            res.status(401);
            throw new Error("email, password not valid")
        }
    
})

// private method
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNzUxODQxOTc3LCJleHAiOjE3NTE4NDIwMzd9.BKX7GJh3571S8r81rZhufpEHtaG1QFYkjpaqv0ve62c"

const current = asyncHandler(async(req, res) => {
    res.json(req.user);
})

module.exports = {registerUser, login, current}