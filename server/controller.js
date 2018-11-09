// const model = require('./model.js');

const createTableAds = () => {
  return `CREATE TABLE ads (
  username varchar(80), 
  lat float, lon float, 
  country varchar(80), city varchar(80), postcode int, road varchar(80), house_number int,
  pictureName varchar(80), length int, width int, height int, weigth int
  )`
}

const insertAd = (username, lat, lon, country, city, postcode, road, house_number, pictureName, length, width, height, weigth) => {
  return `INSERT INTO ads VALUES (
  '${username}', 
  ${lat}, ${lon}, 
  '${country}', '${city}', ${postcode}, '${road}', ${house_number},
  '${pictureName}'
  )`
}

const deleteTable = (table) => {
  return `DROP TABLE ${table}`
}

module.exports = {
  deleteTable,
  insertAd,
  createTableAds
};