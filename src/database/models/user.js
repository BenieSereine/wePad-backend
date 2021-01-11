const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	/**
   * user class
  */
	class user extends Model {
		/**
     * @returns {Object}
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate() {
			// define association here
		}
	}
	user.init({
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		gender: DataTypes.STRING,
		birth_date: DataTypes.STRING,
		location: DataTypes.STRING,
		role: DataTypes.STRING,
		token: DataTypes.STRING,
		isVerified: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'user',
	});
	return user;
};
