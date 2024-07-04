const kominatoRailwayLineStations = [
  {
    name: "五井",
    id: "goi",
  },
  {
    name: "上総村上",
    id: "kazusa-murakami",
  },
  {
    name: "海士有木",
    id: "ama-ariki",
  },
  {
    name: "上総三又",
    id: "kazusa-mimata",
  },
  {
    name: "上総山田",
    id: "kazusa-yamada",
  },
  {
    name: "光風台",
    id: "kofudai",
  },
  {
    name: "馬立",
    id: "umadate",
  },
  {
    name: "上総牛久",
    id: "kazusa-ushiku",
  },
  {
    name: "上総川間",
    id: "kazusa-kawama",
  },
  {
    name: "上総鶴舞",
    id: "kazusa-tsurumai",
  },
  {
    name: "上総久保",
    id: "kazusa-kubo",
  },
  {
    name: "高滝",
    id: "takataki",
  },
  {
    name: "里見",
    id: "satomi",
  },
  {
    name: "飯給",
    id: "itabu",
  },
  {
    name: "月崎",
    id: "tsukizaki",
  },
  {
    name: "上総大久保",
    id: "kazusa-okubo",
  },
  {
    name: "養老渓谷",
    id: "yorokeikoku",
  },
  {
    name: "上総中野",
    id: "kazusa-nakano",
  },
];
const kominatoStationElement = document.getElementById("km");
let kominatoStationElements = "";
kominatoStationElements += '<div class="ml-4 text-lg">';
kominatoRailwayLineStations.forEach((station) => {
  kominatoStationElements += stationTemplate(station, "km");
});
kominatoStationElements += "</div>";
kominatoStationElement.innerHTML += kominatoStationElements;
const kominatoToggle = document.getElementById("km-toggle");
kominatoToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#km input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = kominatoToggle.checked;
  });
});
