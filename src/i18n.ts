import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
        translation: {
            "YES-CODE Course": "WELCOME TO YES-CODE COURSE",
            "LOGIN WITH TWITCH": "LOGIN WITH TWITCH",
            "LOGIN": "PLEASE LOGIN",
            "OAUTH_LOGIN_ERROR": "OAUTH LOGIN ERROR",
            "LOGOUT": "LOGOUT",
            "DASZBORD_WELCUM": "WELCOME TO DASZBORD",
        }
  },
  pl: {
    translation: {
        "YES-CODE Course": "WITAJ W KURISE TAK-KOD",
        "LOGIN WITH TWITCH": "ZALOGUJ Z DRGAWKOM",
          "LOGIN": "PROSZE SIE ZALOGOWAĆ",
          "OAUTH_LOGIN_ERROR": "SORY BYKU NIE MASZ SUBA W KURNIKU ALBO SERVER SIE WYWALIŁ XPP",
          "LOGOUT": "WYGOGLUJ",
        "DASZBORD_WELCUM": "WITAJ PONCZUSIU SŁODZIUTKU O ID",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;