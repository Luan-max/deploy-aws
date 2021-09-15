const { Router } = require("express");
const axios = require("axios");

const routes = Router();

routes.get("/heroes", async (request, response) => {
  const heroes = await getUser();

  return response.status(200).json(heroes.data);
});

module.exports = routes;

async function getUser() {
  try {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/stories?ts=1631673610&apikey=a1b6e4e9252ff609d136be744f4a1fe2&hash=788997e14ef19d1ab76b53fde944407c "
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
