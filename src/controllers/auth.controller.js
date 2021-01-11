import bcrypt from 'bcrypt';
import Response from '../services/response.service';
import UserService from '../services/user.service';
import TokenService from '../services/token.service';

/**
 * AuthController class
*/
class AuthController {
	/**
     * @param {Object} req
     * @param {Object} res
     * @return {Object} This is the user signup
     * */
	static async signup(req, res) {
		const hash = bcrypt.hashSync(req.body.password, 10);
		const user = await UserService.createUser({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: hash,
			gender: req.body.gender,
			birth_date: req.body.birth_date,
			location: req.body.location
		});
		const data = {
			id: user.id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			gender: user.gender,
			birth_date: user.birth_date,
			isVerified: user.isVerified,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
		Response.successMessage(201, 'User Sucessfully created', {
			user: data,
			token: TokenService.generateToken(data),
		});
		return Response.send(res);
	}
}

export default AuthController;
