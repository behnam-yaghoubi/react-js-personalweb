// import translate file
import fa_ir from './fa';
import en_us from './en';

// define lang in local Storage
const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

// define language direction 
const direction = {
    fa: "rtl",
    en: "ltr"
}

// get font direction
function getDirection() {
    return direction[lang];
}

// define language font
const fonts = {
    fa: "IRANSans",
    en: "Muli"
};

// get language font 
function getFont() {
    return fonts[lang];
}

// define translate file
const translate = {
    en: en_us,
    fa: fa_ir
}

// get select translate
function getTranslate() {
    return translate[lang]
}

function changeLanguage(newLang) {
    if (newLang === lang) {
        return
    }
    localStorage.setItem("lang", newLang);
    window.location.reload();
}

export {
    lang,
    getDirection,
    getFont,
    getTranslate,
    changeLanguage
};