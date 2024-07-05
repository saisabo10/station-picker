const chibaRailways = {
  jr: {
    id: "jr",
    name: "JR東日本",
    railway: [
      {
        name: "総武線",
        id: "soubu",
        icon: "jr/jb",
      },
      {
        name: "総武快速線",
        id: "soubu-rapid",
        icon: "jr/jo",
      },
      {
        name: "京葉線",
        id: "keiyo",
        icon: "jr/je",
      },
      {
        name: "武蔵野線",
        id: "musashino",
        icon: "jr/jm",
      },
      {
        name: "総武本線",
        id: "soubu-honsen",
        icon: "jr/soubu-honsen",
      },
      {
        name: "成田線",
        id: "narita",
        icon: "jr/narita",
      },
      {
        name: "成田線（空港支線）",
        id: "narita-kuko",
        icon: "jr/narita",
      },
      {
        name: "成田線（我孫子支線）",
        id: "narita-abiko",
        icon: "jr/narita",
      },
      {
        name: "内房線",
        id: "uchibo",
        icon: "jr/uchibo",
      },
      {
        name: "東金線",
        id: "togane",
        icon: "jr/togane",
      },
      {
        name: "外房線",
        id: "sotobo",
        icon: "jr/sotobo",
      },
      {
        name: "久留里線",
        id: "kururi",
        icon: "jr/kururi",
      },
      {
        name: "鹿島線",
        id: "kashima",
        icon: "jr/kashima",
      },
    ],
  },
  "tokyo-metro": {
    id: "tokyo-metro",
    name: "東京メトロ",
    railway: [
      {
        name: "銀座線",
        id: "ginza",
        icon: "tokyo-metro/g",
      },
      {
        name: "丸ノ内線",
        id: "marunouchi",
        icon: "tokyo-metro/m",
      },
      {
        name: "丸ノ内分岐線",
        id: "marunouchi-bunki",
        icon: "tokyo-metro/mb",
      },
      {
        name: "日比谷線",
        id: "hibiya",
        icon: "tokyo-metro/h",
      },
      {
        name: "東西線",
        id: "tozai",
        icon: "tokyo-metro/t",
      },
      {
        name: "千代田線",
        id: "chiyoda",
        icon: "tokyo-metro/c",
      },
      {
        name: "有楽町線",
        id: "yurakucho",
        icon: "tokyo-metro/y",
      },
      {
        name: "半蔵門線",
        id: "hanzomon",
        icon: "tokyo-metro/z",
      },
      {
        name: "南北線",
        id: "namboku",
        icon: "tokyo-metro/n",
      },
      {
        name: "副都心線",
        id: "fukutoshin",
        icon: "tokyo-metro/f",
      },
    ],
  },
  toei: {
    id: "toei",
    name: "都営地下鉄",
    railway: [
      {
        name: "浅草線",
        id: "asakusa",
        icon: "toei/a",
      },
      {
        name: "三田線",
        id: "mita",
        icon: "toei/i",
      },
      {
        name: "新宿線",
        id: "shinjuku",
        icon: "toei/s",
      },
      {
        name: "大江戸線",
        id: "ooedo",
        icon: "toei/e",
      },
    ],
  },
  rinkai: {
    id: "rinkai",
    name: "りんかい線",
    railway: [
      {
        name: "りんかい線",
        id: "rinkai",
        icon: "rinkai/rinkai",
      },
    ],
  },
  "tokyo-monorail": {
    id: "tokyo-monorail",
    name: "東京モノレール",
    railway: [
      {
        name: "東京モノレール",
        id: "tokyo-monorail",
        icon: "tokyo-monorail/mo",
      },
    ],
  },
  yurikamome: {
    id: "yurikamome",
    name: "ゆりかもめ",
    railway: [
      {
        name: "ゆりかもめ",
        id: "yurikamome",
        icon: "yurikamome/u",
      },
    ],
  },
  ks: {
    id: "ks",
    name: "京成電鉄",
    railway: [
      {
        name: "成田スカイアクセス線",
        id: "narita-skyaccess",
        icon: "keisei/ks_narita",
      },
      {
        name: "新京成線",
        id: "shin-keisei",
        icon: "keisei/sl",
      },
      {
        name: "本線",
        id: "honsen",
        icon: "keisei/ks",
      },
      {
        name: "押上線",
        id: "oshiage",
        icon: "keisei/ks",
      },
      {
        name: "金町線",
        id: "kanamachi",
        icon: "keisei/ks",
      },
      {
        name: "千葉線",
        id: "chiba",
        icon: "keisei/ks",
      },
      {
        name: "千原線",
        id: "chihara",
        icon: "keisei/ks",
      },
      {
        name: "東成田線",
        id: "higashi-narita",
        icon: "keisei/ks",
      },
      {
        name: "芝山鉄道線",
        id: "shibayama",
        icon: "keisei/sr",
      },
    ],
  },
  cm: {
    id: "cm",
    name: "千葉都市モノレール",
    railway: [
      {
        name: "1号線",
        id: "line1",
        icon: "cm/cm_",
      },
      {
        name: "2号線",
        id: "line2",
        icon: "cm/cm_",
      },
    ],
  },
  tb: {
    id: "tb",
    name: "東武鉄道",
    railway: [
      {
        name: "アーバンパークライン",
        id: "noda",
        icon: "tobu/td",
      },
    ],
  },
  hs: {
    id: "hs",
    name: "北総鉄道",
    railway: [
      {
        name: "北総線",
        id: "hs",
        icon: "hokso/hs",
      },
    ],
  },
  km: {
    id: "km",
    name: "小湊鉄道",
    railway: [
      {
        name: "小湊鉄道線",
        id: "km",
        icon: "kominato/kominato",
      },
    ],
  },
  "yu-kari": {
    id: "yu-kari",
    name: "ユーカリが丘線",
    railway: [
      {
        name: "ユーカリが丘線",
        id: "yu-kari",
        icon: "yu-kari/square",
      },
    ],
  },
  tr: {
    id: "tr",
    name: "東葉高速鉄道",
    railway: [
      {
        name: "東葉高速線",
        id: "tr",
        icon: "toyo/tr",
      },
    ],
  },
  is: {
    id: "is",
    name: "いすみ鉄道",
    railway: [
      {
        name: "いすみ線",
        id: "is",
        icon: "isumi/isumi",
      },
    ],
  },
  cd: {
    id: "cd",
    name: "銚子電気鉄道",
    railway: [
      {
        name: "銚子電気鉄道線",
        id: "cd",
        icon: "cd/cd",
      },
    ],
  },
};

const flattenChibaRailways = Object.values(chibaRailways).flatMap((railway) => {
  if (railway.railway.length === 1 && railway.id !== "tb") {
    return railway.railway.map((station) => ({
      id: station.id,
      name: station.name,
    }));
  } else {
    return railway.railway.map((station) => ({
      id: `${railway.id}-${station.id}`,
      name: `${railway.name}-${station.name}`,
    }));
  }
});

const railwayTemplate = (railway, key) => `
  <details class="ml-4" id="${key}-${railway.id}">
          <summary class="relative py-4 text-lg cursor-pointer">
            <img src="assets/${railway.icon}.svg" alt="${railway.name}" class="inline ml-2 w-8 h-8">
            <span class="ml-2">${railway.name}</span>
            <input type="checkbox" class="absolute top-1/2 -translate-y-1/2 right-0 mr-4" id="${key}-${railway.id}-toggle">
          </summary>
        </details>
`;

const stationTemplate = (station, key) => `
      <div class="relative flex justify-between py-2">
        <label for="${`${key}-${station.id}`}">${station.name}</label>
        <input type="checkbox" class="mr-4" id="${`${key}-${station.id}`}" name="${`${key}-${station.id}`}">
      </div>
    `;

Object.keys(chibaRailways).forEach((key) => {
  const railway = chibaRailways[key];
  if (railway.railway.length !== 1 || railway.id === "tb") {
    const railwayElement = document.getElementById(key);
    let railwayElements = "";
    railwayElements += '<div class="ml-4 text-lg">';
    railway.railway.forEach((station) => {
      railwayElements += railwayTemplate(station, key);
    });
    railwayElements += "</div>";
    railwayElement.innerHTML += railwayElements;
  }
});

const kantoToggle = document.getElementById("kanto-toggle");
kantoToggle.addEventListener("click", () => {
  const kanto = document.getElementById("kanto");

  const checkboxes = kanto.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = kantoToggle.checked;
  });
});

const chibaToggle = document.getElementById("chiba-toggle");
chibaToggle.addEventListener("click", () => {
  const chiba = document.getElementById("chiba");

  const checkboxes = chiba.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = chibaToggle.checked;
  });
});

const stationForm = document.getElementById("stations");
stationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length === 0) {
    alert("駅を選択してください");
    return;
  }
  const stationNames = new Set();
  checkboxes.forEach((checkbox) => {
    if (checkbox.id.includes("toggle")) return;
    stationNames.add({
      name: checkbox.parentElement.querySelector("label").textContent,
      railway: checkbox.parentElement.parentElement.parentElement.id,
    });
  });
  let stationNamesArray = Array.from(stationNames);
  for (const station of stationNamesArray) {
    const sameStation = stationNamesArray.find(
      (s) => s.name === station.name && s.railway !== station.railway
    );
    if (sameStation) {
      const index = stationNamesArray.findIndex(
        (s) => s.name === station.name && s.railway === station.railway
      );
      stationNamesArray.splice(index, 1);
    }
  }
  const random = Math.floor(Math.random() * stationNamesArray.length);
  const stationName = stationNamesArray[random].name + "駅";
  const railwayName = flattenChibaRailways.find(
    (railway) => railway.id === stationNamesArray[random].railway
  ).name;
  document.getElementById("result-station").textContent = stationName;
  document.getElementById("result-railway").textContent = railwayName;
  document.getElementById(
    "result-map"
  ).src = `https://maps.google.co.jp/maps?output=embed&q=${railwayName}%20${stationName}`;
  document.getElementById("result").classList.remove("hidden");
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

function tweet(railway, station) {
  window.open(
    `https://x.com/intent/tweet?text=今日の駅は${railway}の『${station}』です！&url=https://dl.wmsci.com/station/`
  );
}

document.getElementById("retry-same").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  if (checkboxes.length === 0) {
    alert("駅を選択してください");
    return;
  }
  const stationNames = new Set();
  checkboxes.forEach((checkbox) => {
    if (checkbox.id.includes("toggle")) return;
    stationNames.add({
      name: checkbox.parentElement.querySelector("label").textContent,
      railway: checkbox.parentElement.parentElement.parentElement.id,
    });
  });
  let stationNamesArray = Array.from(stationNames);
  for (const station of stationNamesArray) {
    const sameStation = stationNamesArray.find(
      (s) => s.name === station.name && s.railway !== station.railway
    );
    if (sameStation) {
      const index = stationNamesArray.findIndex(
        (s) => s.name === station.name && s.railway === station.railway
      );
      stationNamesArray.splice(index, 1);
    }
  }
  const random = Math.floor(Math.random() * stationNamesArray.length);
  const stationName = stationNamesArray[random].name + "駅";
  const railwayName = flattenChibaRailways.find(
    (railway) => railway.id === stationNamesArray[random].railway
  ).name;
  document.getElementById("result-station").textContent = stationName;
  document.getElementById("result-railway").textContent = railwayName;
  document.getElementById(
    "result-map"
  ).src = `https://maps.google.co.jp/maps?output=embed&q=${railwayName}%20${stationName}`;
  document
    .getElementById("tweet")
    .addEventListener("click", () => tweet(railwayName, stationName));
});

document.getElementById("retry").addEventListener("click", () => {
  document.getElementById("result").classList.add("hidden");
});

const setToggle = (railway) => {
  const toggle = document.getElementById(railway + "-toggle");
  toggle.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      `#${railway} input[type='checkbox']`
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = toggle.checked;
    });
  });
};

const generateStations = (railway, stations) => {
  const stationElement = document.getElementById(railway);
  let stationElements = "";
  stationElements += '<div class="ml-4 text-lg">';
  stations.forEach((station) => {
    stationElements += stationTemplate(station, railway);
  });
  stationElements += "</div>";
  stationElement.innerHTML += stationElements;
  setToggle(railway);
};

const generateRailwayStations = (railway, railwayStations) => {
  Object.keys(railwayStations).forEach((key) => {
    const stations = railwayStations[key];
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
  setToggle(railway);
};
