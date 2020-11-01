// const staticUrl = "http://localhost:6700"
const MONGO_USERNAME = 'vietlinhco';
const MONGO_PASSWORD = 'Ankedalinhco1';
// const MONGO_HOST = '103.48.193.51';
// const MONGO_PORT = '8017';
// const MONGO_DATABASE = 'static_medpro';
const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ds235169.mlab.com:35169/match`;

export const Url = {
  development: {
    staticUrl: 'http://localhost:6700',
    mongoUrl,
  },
  testing: {
    staticUrl: '',
    mongoUrl,
  },
  production: {
    staticUrl: '',
    mongoUrl,
  }
}


