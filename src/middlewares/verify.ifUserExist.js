/* eslint-disable import/prefer-default-export */
import Response from '../services/response.service';
import UserService from '../services/user.service';

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @return {object} this is going to verify a user
 */
export const checkIfEmailExist = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (user) {
		Response.successMessage(409, 'email is already exist');
		return Response.send(res);
	}
	next();
};
