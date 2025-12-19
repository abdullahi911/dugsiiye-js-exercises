
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");

const fromSelected = document.getElementById("fromSelected");
const toSelected = document.getElementById("toSelected");

const fromDropdown = document.getElementById("fromDropdown");
const toDropdown = document.getElementById("toDropdown");


let fromLang = "auto";
let toLang = "en-GB";

fromSelected.textContent = "Auto Detect";
toSelected.textContent = "English";


const countries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "de-DE": "German",
  "en-GB": "English",
  "es-ES": "Spanish",
  "fr-FR": "French",
  "hi-IN": "Hindi",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "ko-KR": "Korean",
  "pt-PT": "Portuguese",
  "ru-RU": "Russian",
  "so-SO": "Somali",
  "sw-SZ": "Swahili",
  "ti-TI": "Tigrinya",
  "tr-TR": "Turkish",
  "zh-CN": "Chinese",
  "bn-IN": "Bengali",
  "ur-PK": "Urdu",
  "fa-IR": "Persian",
  "nl-NL": "Dutch",
  "sv-SE": "Swedish"
};


function addLanguages(dropdown, isFrom) {
  for (let code in countries) {
    const option = document.createElement("div");
    option.className = "lang-option"; // matches your CSS
    option.textContent = countries[code];

    option.addEventListener("click", () => {
      if (isFrom) {
        fromLang = code;
        fromSelected.textContent = countries[code];
        fromDropdown.classList.add("hidden");
      } else {
        toLang = code;
        toSelected.textContent = countries[code];
        toDropdown.classList.add("hidden");
      }
    });

    dropdown.appendChild(option);
  }
}

addLanguages(fromDropdown, true);
addLanguages(toDropdown, false);


fromSelected.addEventListener("click", () => {
  fromDropdown.classList.toggle("hidden");
  toDropdown.classList.add("hidden");
});

toSelected.addEventListener("click", () => {
  toDropdown.classList.toggle("hidden");
  fromDropdown.classList.add("hidden");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-box")) {
    fromDropdown.classList.add("hidden");
    toDropdown.classList.add("hidden");
  }
});

translateBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (!text) return;

  outputText.value = "Translating...";

  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${fromLang === "auto" ? "" : fromLang}|${toLang}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      outputText.value = data.responseData.translatedText;
    })
    .catch(() => {
      outputText.value = "Translation failed. Try again.";
    });
});

inputText.addEventListener("input", () => {
  if (!inputText.value) {
    outputText.value = "";
  }
});
