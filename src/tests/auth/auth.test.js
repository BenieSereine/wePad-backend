/* eslint-disable import/named */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
// import { token, expiredToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

const loginTest = () => {
	describe('/POST login with email and password', () => {
		it('should be able to login with email and password', (done) => {
			chai
				.request(app)
				.patch('/api/auth/login')
				.send({
					email: 'Benie1@gmail.com',
					password: 'HeyH@123'
				})
				.end((err, res) => {
					res.body.should.be.an('object');
					res.should.have.status(404);
					res.body.should.have.property('message');
				});
			done();
		});
		// it('should check if a user data is not available', (done) => {
		// 	chai
		// 		.request(app)
		// 		.patch('/api/users/profile')
		// 		.set('Authorization', `Bearer ${token}`)
		// 		.send({ email: 'Benie@gmail.com' })
		// 		.end((err, res) => {
		// 			res.body.should.be.an('object');
		// 			res.should.have.status(400);
		// 			res.body.should.have.property('message');
		// 		});
		// 	done();
		// });
		// it('should check if the user did not set authorization token', (done) => {
		// 	chai
		// 		.request(app)
		// 		.patch('/api/users/profile')
		// 		.end((err, res) => {
		// 			res.body.should.be.an('object');
		// 			res.should.have.status(401);
		// 			res.body.should.have.property('message');
		// 		});
		// 	done();
		// });
		// it('should check if the user set expired token', (done) => {
		// 	chai
		// 		.request(app)
		// 		.patch('/api/users/profile')
		// 		.set('Authorization', `Bearer ${expiredToken}`)
		// 		.end((err, res) => {
		// 			res.body.should.be.an('object');
		// 			res.should.have.status(401);
		// 			res.body.should.have.property('message');
		// 		});
		// 	done();
		// });
	});
};

export default loginTest;
