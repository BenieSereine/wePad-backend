import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { checkIfEmailExist } from '../middlewares/verify.ifUserExist';

const router = Router();

router.post(
	'/signup',
	checkIfEmailExist,
	AuthController.signup
);
export default router;
