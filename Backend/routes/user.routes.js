const express=require('express');
const { body } = require('express-validator');
const router=express.Router();
const userController=require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName should be minimum of len 3'),
    body('password').isLength({min:6}).withMessage('Password should be minimum of len 6')
],
  userController.registerUser
)

module.exports=router;