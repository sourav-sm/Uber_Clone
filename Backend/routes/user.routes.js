const express=require('express');
const { body } = require('express-validator');
const router=express.Router();
const userController=require('../controllers/user.controller');
const authMiddleware=require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName should be minimum of len 3'),
    body('password').isLength({min:6}).withMessage('Password should be minimum of len 6')
],
  userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage('Password length should be minimum of 6')
],
 userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)
module.exports=router;