const express = require('express');
const router = express.Router();
const usersController =require('../controller/user_controller');
const passport = require('passport');
router.get('/profile/:id' ,passport.checkAuthentication,usersController.profile);
router.get('/sign-up',usersController.Sign_up);
router.get('/sign-in',usersController.Sign_In);
router.get('/sign-out',usersController.destroySession);
router.post('/create',usersController.create);
router.post('/create-session',passport.authenticate('local',{failureRedirect:'users/sign-in'}),usersController.createSession);
router.post('/update',usersController.update);

module.exports = router;