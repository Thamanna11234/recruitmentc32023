const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),


translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    
    // Todo: add api fetch from https://mymemory.translated.net/doc/spec.php

    translateBtn.addEventListener('click', () => {
  let text = fromText.value.trim();
  let translateFrom = selectTag[0].value;
  let translateTo = selectTag[1].value;

  if (!text) return;

  toText.setAttribute('placeholder', 'Translating...');

  fetch(`https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it${encodeURIComponent(text)}&langpair=${translateFrom}|${translateTo}`)
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
      // Update the translated text in the "toText" element
      const translatedText = data.responseData.translatedText;
      toText.value = translatedText;
      toText.setAttribute('placeholder', 'Translation');
    })
    .catch(error => {
      console.log('An error occurred:', error);
      toText.setAttribute('placeholder', 'Translation error');
    });
});


});
icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
      if (!fromText.value || !toText.value) return;
  
      if (icon.classList.contains("fa-copy")) {
        const copyButton = icon;
        const textToCopy = toText.value;
  
        
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
  
        
        textarea.select();
  
        try {
          
          navigator.clipboard.writeText(textarea.value);
          console.log("Text copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
  
        
        document.body.removeChild(textarea);
      }
  
      if (icon.classList.contains("fa-volume-up")) {
        
      }
    });
  });
  

        
        // TODO: add code to copy to Clipboard for the icon with class fa-copy
       


        // TODO: add code for speechSynthesis for icon with classname fa-volume-up (text to speech)
        
        icons.forEach(icon => {
            icon.addEventListener("click", ({ target }) => {
              if (!fromText.value || !toText.value) return;
          
              if (icon.classList.contains("fa-copy")) {
                // Code for copying to clipboard
              }
          
              if (icon.classList.contains("fa-volume-up")) {
                const textToSpeak = toText.value;
          
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = selectTag[1].value;
          
                speechSynthesis.speak(utterance);
              }
            });
          });
         


const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});


exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});