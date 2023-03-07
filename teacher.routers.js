const express=require('express');
const router= express.Router();
const {createTeacher,viewTeacherById,viewTeacher,updateTeacher,deleteTeacher}=require('../controllers/teacher.controller');
const authMiddleware = require("../middleware/authorisation.middleware");

  
router.post('/teachers/new',authMiddleware, createTeacher);
router.get('/teachers',authMiddleware, viewTeacher);
router.get('teachers/:id',authMiddleware, viewTeacherById);
router.put('/teachers/:id/update', authMiddleware,updateTeacher);
router.delete('/teachers/:id/delete',authMiddleware, deleteTeacher);
   
module.exports= router;