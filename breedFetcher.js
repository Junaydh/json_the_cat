const request = require('request');

// request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   if (JSON.parse(body).length !== 0) {
//     const data = JSON.parse(body);
//     console.log(data[0].description);
//   } else {
//     console.log('ERROR: Breed not found!');
//   }
// });

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if (JSON.parse(body).length !== 0) {
        const data = JSON.parse(body);
        callback(null, (data[0].description));
      } else {
        callback('ERROR: Breed not found!', null);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};