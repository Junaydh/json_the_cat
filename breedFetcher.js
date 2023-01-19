const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (JSON.parse(body).length !== 0) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else {
    console.log('ERROR: Breed not found!');
  }
});