import express from 'express';
import { signin, signup } from '../controllers/user.js'

const router = express.Router();

router.post('/signin', signin) // ovo je post jer trebamo poslat neke podatke na backend - iz forme u bazu
router.post('/signup', signup)

export default router;