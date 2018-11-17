const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app
  .use(cors())
  .get('/ads', (req, res) => {
    controller.getAllAds(req, res);
  })
  .get('/ads/:id', (req, res) => {
    controller.getAd(req, res);
  })
  .use(express.json())
  .post('/ads', (req, res) => {
    controller.createAd(req, res);
  })
  .delete('/ads/:id', (req, res) => {
    controller.deleteAd(req, res);
  })
  .use((_, res) => {
    res.status(404).end();
  });

module.exports = app;
