const express = require('express');
const { createProfile, logIn, selectProfile, updateProfile } = require('../controllers/profileController');
const { insertTodo, getTodo, updateTodo, updateTodoStatus, removeTodo, selectTodoByStatus, selectTodoByDate } = require('../controllers/todoController');
const { authVerify } = require('../middleware/authVerifyMiddleware');
const router = express.Router();

router.post('/signUp', createProfile);
router.get('/logIn', logIn);
router.get('/selectProfile', authVerify, selectProfile);
router.post('/updateProfile', authVerify, updateProfile);

// todo api endpoint 
router.post('/insertTodo', authVerify, insertTodo);
router.get('/getTodo', authVerify, getTodo);
router.post('/updateTodo', authVerify, updateTodo);
router.post('/updateTodoStatus', authVerify, updateTodoStatus);
router.get('/removeTodo', authVerify, removeTodo);
router.get('/selectTodoByStatus', authVerify, selectTodoByStatus);
router.get('/selectTodoByDate', authVerify, selectTodoByDate);

module.exports = router;