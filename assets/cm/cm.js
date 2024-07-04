const chibaUrbanMonorailStations = {
  "cm-line1": [
    {
      name: "千葉みなと",
      id: "chiba-minato",
    },
    {
      name: "市役所前",
      id: "shiyakusho-mae",
    },
    {
      name: "千葉",
      id: "chiba",
    },
    {
      name: "栄町",
      id: "sakae-cho",
    },
    {
      name: "葭川公園",
      id: "yoshikawa-koen",
    },
    {
      name: "県庁前",
      id: "kencho-mae",
    },
  ],
  "cm-line2": [
    {
      name: "千葉みなと",
      id: "chiba-minato",
    },
    {
      name: "市役所前",
      id: "shiyakusho-mae",
    },
    {
      name: "千葉",
      id: "chiba",
    },
    {
      name: "千葉公園",
      id: "chiba-koen",
    },
    {
      name: "作草部",
      id: "sakusabe",
    },
    {
      name: "天台",
      id: "tendai",
    },
    {
      name: "穴川",
      id: "anagawa",
    },
    {
      name: "スポーツセンター",
      id: "sports-center",
    },
    {
      name: "動物公園",
      id: "dobutsu-koen",
    },
    {
      name: "みつわ台",
      id: "mitsuwadai",
    },
    {
      name: "都賀",
      id: "tsuga",
    },
    {
      name: "桜木",
      id: "sakuragi",
    },
    {
      name: "小倉台",
      id: "oguradai",
    },
    {
      name: "千城台北",
      id: "chishirodai-kita",
    },
    {
      name: "千城台",
      id: "chishirodai",
    },
  ],
};

Object.keys(chibaUrbanMonorailStations).forEach((key) => {
  const stations = chibaUrbanMonorailStations[key];
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
const cmToggle = document.getElementById("cm-toggle");
cmToggle.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#cm input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = cmToggle.checked;
  });
});
