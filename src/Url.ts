// const staticUrl = "http://localhost:6700"
const MONGO_USERNAME = 'myUserAdmin';
const MONGO_PASSWORD = 'abc123';
const MONGO_HOST = '103.48.193.51';
const MONGO_PORT = '8017';
const MONGO_DATABASE = 'static_medpro';
const mongoUrl = `mongodb://${!!MONGO_USERNAME && !!MONGO_PASSWORD ? `${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@` : ``}${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

export const Url = {
  development: {
    staticUrl: 'http://localhost:6700',
    mongoUrl,
  },
  testing: {
    staticUrl: 'https://static-inside-testing.medpro.com.vn',
    mongoUrl,
  },
  production: {
    staticUrl: 'https://inside-static.medpro.com.vn',
    mongoUrl,
  }
}


