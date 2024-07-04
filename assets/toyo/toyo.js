const toyoStations = [
  {
    name: "西船橋",
    id: "nishi-funabashi",
  },
  {
    name: "東海神",
    id: "higashi-kaijin",
  },
  {
    name: "飯山満",
    id: "hasama",
  },
  {
    name: "北習志野",
    id: "kita-narashino",
  },
  {
    name: "船橋日大前",
    id: "funabashi-nichidai-mae",
  },
  {
    name: "八千代緑が丘",
    id: "yachiyo-midorigaoka",
  },
  {
    name: "八千代中央",
    id: "yachiyo-chuo",
  },
  {
    name: "村上",
    id: "murakami",
  },
  {
    name: "東葉勝田台",
    id: "toyo-katsutadai",
  },
];
const toyoStationElement = document.getElementById("tr");
let toyoStationElements = "";
toyoStationElements += '<div class="ml-4 text-lg">';
toyoStations.forEach((station) => {
  toyoStationElements += stationTemplate(station, "tr");
});
toyoStationElements += "</div>";
toyoStationElement.innerHTML += toyoStationElements;
const toyoToggle = document.getElementById("tr-toggle");
toyoToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#tr input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = toyoToggle.checked;
  });
});
