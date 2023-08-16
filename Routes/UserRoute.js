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
  saveCollabColumnsHandler,
  getCollabSelectedColumns,
  saveAffectColumnsHandler,
  getAffectSelectedColumns,
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

//vehicule columns
router.post('/users/save-columns', authMiddleware, saveColumnsHandler);
router.get('/users/selected-columns', authMiddleware, getSelectedColumns);
// collabrateur columns
router.post('/users/collab-save-columns', authMiddleware, saveCollabColumnsHandler);
router.get('/users/collab-selected-columns', authMiddleware, getCollabSelectedColumns);

//affectation columns 
router.post('/users/affectation-save-columns', authMiddleware, saveAffectColumnsHandler);
router.get('/users/affectation-selected-columns', authMiddleware, getAffectSelectedColumns);


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
