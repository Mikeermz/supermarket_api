const NODE_ENV = process.env.NODE_ENV || 'dev';

const ENVS = {
  dev: {
    db: {
      url: 'mongodb+srv://mikeermz:ManzAna14@mikee-wvjvk.mongodb.net/supermarket',
    },
    port: 8000
  },
  test: {

  },
  production: {
    db: {
      url: 'mongodb+srv://mikeermz:ManzAna14@mikee-wvjvk.mongodb.net/supermarket',
    }
  }
};

module.exports = ENVS[NODE_ENV];
