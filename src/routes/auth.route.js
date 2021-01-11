import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import { checkIfEmailExist } from '../middlewares/verify.ifUserExist';
import { validateSignup } from '../validations/user.validation';

const router = Router();

router.post(
	'/signup',
	checkIfEmailExist,
	validateSignup,
	AuthController.signup
);
export default router;
