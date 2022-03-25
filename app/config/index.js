require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development';

const ENVS = {

	dev: {
		SECRET_KEY: process.env.SECRET_KEY,
		db: {
			url: process.env.MONGO_URL + process.env.DATABASE,
		},
		port: process.env.PORT
	},

	test: {

	},

	production: {
		SECRET_KEY: process.env.SECRET_KEY,
		db: {
			url: process.env.MONGO_URL + process.env.DATABASE,
		},
		port: 8080
	}
};

module.exports = ENVS[NODE_ENV];