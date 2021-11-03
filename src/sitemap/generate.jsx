require("babel-register")({
  presets: ["es2015", "react"],
});
const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;
const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.newworlddocs.com",
  responseType: "json",
  withCredentials: false,
  validateStatus: (status) => {
    // handling our own errors
    return status < 501;
  },
});

async function generateSitemap() {
  try {
    const farmingRoutes = await api.get("/farming-routes?limit=10000");

    let idMap = [];

    for (let i = 0; i < farmingRoutes.data.items.length; i++) {
      idMap.push({ id: farmingRoutes.data.items[i].id });
    }

    const paramsConfig = {
      "/farming-routes/:id": idMap,
    };

    return new Sitemap(router)
      .applyParams(paramsConfig)
      .build("https://www.newworlddocs.com")
      .save("./public/sitemap.xml");
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
