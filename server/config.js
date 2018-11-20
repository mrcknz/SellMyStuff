// if (process.env.ENV == 'test') {
module.exports = {
  db     : {
    urlString : 'mongodb://localhost/ads',
    options   : { useNewUrlParser: true }
  },
  server : {
    port : 3000
  }
};
