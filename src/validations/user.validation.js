/* eslint-disable import/prefer-default-export */
import Joi from 'joi';
import Response from '../services/response.service';
/**
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Object} validating signup
*/
export const validateSignup = (req, res, next) => {
	const schema = Joi.object({
		first_name: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
          ' fullname length must be less than or equal to 30 characters long',
				'any.required': 'fullname is required',
				'string.trim':
          'fullname must not have white spces at the beginning and at the end',
			}),
		last_name: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.empty': 'fullname is not allowed to be empty',
				'string.min': 'fullname length must be at least 3 characters long',
				'string.max':
          ' fullname length must be less than or equal to 30 characters long',
				'any.required': 'fullname is required',
				'string.trim':
          'fullname must not have white spces at the beginning and at the end',
			}),
		email: Joi.string().email().required().messages({
			'string.email': 'Please enter a valid email address',
			'any.required': 'email is required',
			'string.empty': 'email is not allowed to be empty',
		}),
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.required()
			.messages({
				'string.pattern.base':
          'password should contain uppercase,lowercase,specialCharacter,and number',
				'any.required': 'password is required',
				'string.empty': 'password is not allowed to be empty',
			}),

		birth_date: Joi.string()
			.regex(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
			.required()
			.messages({
				'string.pattern.base':
          'birthdate shoul be in the format (yyyy-mm-dd) example:(2017-11-30)',
				'any.required': 'birthdate is required',
				'string.empty': 'birthdate is not allowed to be empty',
			}),
		gender: Joi.any().valid('male', 'female', 'do not prefer to mention').required().messages({
			'string.empty': 'gender is not allowed to be empty',
			'any.required': 'gender is required',
			'any.only': 'gender must be  male or female',
		}),
		location: Joi.string()
			.allow('')
			.trim()
			.strict()
			.min(3)
			.max(15)
			.required()
			.messages({
				'string.min': 'country length must be at least 3 characters long',
				'string.max':
          'country length must be less than or equal to 15 characters long',
				'string.empty': 'country is not allowed to be empty',
				'any.required': 'country is required',
				'string.trim':
          'country must not have white spces at the beginning and at the end',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);
	if (error) {
		const errors = error.details.map((e) => e.message);
		Response.errorMesage(402, errors);
		return Response.send(res);
	}

	next();
};
