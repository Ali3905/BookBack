const express = require("express")
const router = express.Router()
const user = require("../models/user")
const { body, validationResult } = require('express-validator');

router.post("/signup", [
body("name", "Name Must contain atleast three Characters").isLength({min : 3}),
body("email", "Enter a valid Email").isEmail(),
body("password", "Password Must contain five characters").isLength({min : 5}),
]
, async(req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const { name, email, phone, password } = req.body
    
    const User = new user({
        name,
        email, 
        phone, 
        password, 
        listings: [],
    })

    await User.save()
    res.send(User)
})


module.exports = router