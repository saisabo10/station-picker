const choshiStations = [
  {
    name: "銚子",
    id: "choshi",
  },
  {
    name: "仲ノ町",
    id: "nakano-cho",
  },
  {
    name: "観音",
    id: "kannnon",
  },
  {
    name: "本銚子",
    id: "moto-choshi",
  },
  {
    name: "笠上黒生",
    id: "kasagami-kurohae",
  },
  {
    name: "西海鹿島",
    id: "nishi-ashikajima",
  },
  {
    name: "海鹿島",
    id: "ashikajima",
  },
  {
    name: "君ヶ浜",
    id: "kimi-ga-hama",
  },
  {
    name: "犬吠",
    id: "inubo",
  },
  {
    name: "外川",
    id: "tokawa",
  },
];
const choshiStationElement = document.getElementById("cd");
let choshiStationElements = "";
choshiStationElements += '<div class="ml-4 text-lg">';
choshiStations.forEach((station) => {
  choshiStationElements += stationTemplate(station, "cd");
});
choshiStationElements += "</div>";
choshiStationElement.innerHTML += choshiStationElements;
const choshiToggle = document.getElementById("cd-toggle");
choshiToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#cd input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = choshiToggle.checked;
  });
});
