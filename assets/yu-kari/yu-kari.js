const yukariStations = [
  {
    name: "ユーカリが丘",
    id: "yukari-ga-oka",
  },
  {
    name: "地区センター",
    id: "chiku-senta",
  },
  {
    name: "公園",
    id: "kouen",
  },
  {
    name: "女子大",
    id: "joshi-dai",
  },
  {
    name: "中学校",
    id: "chu-gakko",
  },
  {
    name: "井野",
    id: "ino",
  },
];
const yukariStationElement = document.getElementById("yu-kari");
let yukariStationElements = "";
yukariStationElements += '<div class="ml-4 text-lg">';
yukariStations.forEach((station) => {
  yukariStationElements += stationTemplate(station, "yu-kari");
});
yukariStationElements += "</div>";
yukariStationElement.innerHTML += yukariStationElements;
const yukariToggle = document.getElementById("yu-kari-toggle");
yukariToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    "#yu-kari input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = yukariToggle.checked;
  });
});
