const jrTokyoStations = {
  "jr-east-yamanote": [],
  "jr-east-keihin-tohoku": [],
  "jr-east-tokaido": [],
  "jr-east-itsukaichi": [
    {
      name: "拝島",
      id: "haijima",
    },
    {
      name: "熊川",
      id: "kumagawa",
    },
    {
      name: "東秋留",
      id: "higashi-akiru",
    },
    {
      name: "秋川",
      id: "akigawa",
    },
    {
      name: "武蔵引田",
      id: "musashi-hikida",
    },
    {
      name: "武蔵増戸",
      id: "musashi-masuko",
    },
    {
      name: "武蔵五日市",
      id: "musashi-itsukaichi",
    },
  ],
  "jr-east-oume": [],
  "jr-east-chuo-rapid": [],
  "jr-east-hachiko": [],
};

generateRailwayStations("jr-east", jrTokyoStations);
