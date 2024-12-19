const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName should be minimum of len 3'),
    body('password').isLength({min:6}).withMessage('Password should be minimum of len 6'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be minimum of len 3'),    
    body('vehicle.plateNumber').isLength({min:3}).withMessage('Plate Number should be minimum of len 3'),   
    body('vehicle.capacity').isInt().withMessage('Capacity should be number'),  
    body('vehicle.vehicleType').isIn(['motorcycle','car','auto']).withMessage('Vehicle Type should be motorcycle, car or auto')
],
  captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage('Password length should be minimum of 6')
],
  captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)   

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);    
module.exports = router;