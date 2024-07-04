const isumiLineStations = [
  {
    name: "大原",
    id: "ohara",
  },
  {
    name: "西大原",
    id: "nishi-ohara",
  },
  {
    name: "上総東",
    id: "kazusa-higashi",
  },
  {
    name: "新田野",
    id: "nittano",
  },
  {
    name: "国吉",
    id: "kuniyoshi",
  },
  {
    name: "上総中川",
    id: "kazusa-nakagawa",
  },
  {
    name: "城見ヶ丘",
    id: "shiromigaoka",
  },
  {
    name: "大多喜",
    id: "otaki",
  },
  {
    name: "小谷松",
    id: "koyamatsu",
  },
  {
    name: "東総元",
    id: "higashi-fusamoto",
  },
  {
    name: "久我原",
    id: "kugahara",
  },
  {
    name: "総元",
    id: "fusamoto",
  },
  {
    name: "西畑",
    id: "nishihata",
  },
  {
    name: "上総中野",
    id: "kazusa-nakano",
  },
];
const isumiStationElement = document.getElementById("is");
let isumiStationElements = "";
isumiStationElements += '<div class="ml-4 text-lg">';
isumiLineStations.forEach((station) => {
  isumiStationElements += stationTemplate(station, "is");
});
isumiStationElements += "</div>";
isumiStationElement.innerHTML += isumiStationElements;
const isumiToggle = document.getElementById("is-toggle");
isumiToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#is input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isumiToggle.checked;
  });
});
