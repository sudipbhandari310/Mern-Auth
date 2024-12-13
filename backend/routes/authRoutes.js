import express from 'express';
import { signUp, logIn, logOut } from '../controllers/authController.js';
const router = express.Router();
router.get('/signup', signUp);
router.get('/login', logIn);
router.get('/logout', logOut);
router.post('/login');

export default router;
