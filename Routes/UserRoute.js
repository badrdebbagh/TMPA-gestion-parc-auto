const express = require('express');
const {
  AddUser,
  FindAllUsers,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
  loginHandler,
  saveColumnsHandler,
  getSelectedColumns,
} = require('../controllers/UserController');
const User = require('../models/Users');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

/* add user */
router.post('/users', AddUser);

/* find all users */
router.get('/users', FindAllUsers);




/* login  */
router.post('/login', loginHandler);
router.post('/users/save-columns', authMiddleware, saveColumnsHandler);
router.get('/users/selected-columns', authMiddleware, getSelectedColumns);

/* find single user */
router.get('/users/:id', FindSinglUser);

/* update user */
router.put('/users/:id', UpdateUser);

/* delete user */
router.delete('/users/:id', DeleteUser);

module.exports = router;

/* const express =require('express');
const { AddUser, FindAllUsers, FindSinglUser, UpdateUser, DeleteUser , loginHandler } = require('../controllers/UserController');
const router = express.Router();


/* add user 
router.post('/users', AddUser)

/* find all users 
router.get('/users', FindAllUsers)

/* find single user 
router.get('/users/:id', FindSinglUser)

/* update user 
router.put('/users/:id', UpdateUser)

/* delete user 
router.delete('/users/:id', DeleteUser)

/* login  
router.post("/login", loginHandler);



module.exports = router ; */
