const tobuStations = {
  "tb-noda": [
    {
      name: "船橋",
      id: "funabashi",
    },
    {
      name: "新船橋",
      id: "shin-funabashi",
    },
    {
      name: "塚田",
      id: "tsukada",
    },
    {
      name: "馬込沢",
      id: "magomezawa",
    },
    {
      name: "鎌ヶ谷",
      id: "kamagaya",
    },
    {
      name: "新鎌ヶ谷",
      id: "shinkamagaya",
    },
    {
      name: "六実",
      id: "mutsumi",
    },
    {
      name: "高柳",
      id: "takayanagi",
    },
    {
      name: "逆井",
      id: "sakasai",
    },
    {
      name: "増尾",
      id: "masuo",
    },
    {
      name: "新柏",
      id: "shin-kashiwa",
    },
    {
      name: "柏",
      id: "kashiwa",
    },
    {
      name: "豊四季",
      id: "toyoshiki",
    },
    {
      name: "流山おおたかの森",
      id: "nagareyama-otakanomori",
    },
    {
      name: "初石",
      id: "hatsuishi",
    },
    {
      name: "江戸川台",
      id: "edogawadai",
    },
    {
      name: "運河",
      id: "unga",
    },
    {
      name: "梅郷",
      id: "umesato",
    },
    {
      name: "野田市",
      id: "nodashi",
    },
    {
      name: "愛宕",
      id: "atago",
    },
    {
      name: "清水公園",
      id: "shimizu-koen",
    },
    {
      name: "七光台",
      id: "nanakodai",
    },
    {
      name: "川間",
      id: "kawama",
    },
    {
      name: "南桜井",
      id: "minami-sakurai",
    },
    {
      name: "藤の牛島",
      id: "fuji-no-ushijima",
    },
    {
      name: "春日部",
      id: "kasukabe",
    },
    {
      name: "八木崎",
      id: "yagisaki",
    },
    {
      name: "豊春",
      id: "toyo-haru",
    },
    {
      name: "東岩槻",
      id: "higashi-iwatsuki",
    },
    {
      name: "岩槻",
      id: "iwatsuki",
    },
    {
      name: "七里",
      id: "nanasato",
    },
    {
      name: "大和田",
      id: "owada",
    },
    {
      name: "大宮公園",
      id: "omiya-koen",
    },
    {
      name: "北大宮",
      id: "kita-omiya",
    },
    {
      name: "大宮",
      id: "omiya",
    },
  ],
};
Object.keys(tobuStations).forEach((key) => {
  const stations = tobuStations[key];
  const stationElement = document.getElementById(key);
  let stationElements = "";
  stationElements += '<div class="ml-4 text-lg">';
  stations.forEach((station) => {
    stationElements += stationTemplate(station, key);
  });
  stationElements += "</div>";
  stationElement.innerHTML += stationElements;
  const stationToggle = document.getElementById(`${key}-toggle`);
  stationToggle.addEventListener("click", (event) => {
    const checkboxes = document.querySelectorAll(
      `#${key} input[type="checkbox"]`
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
  });
});
const tbToggle = document.getElementById("tb-toggle");
tbToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#tb input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = tbToggle.checked;
  });
});
