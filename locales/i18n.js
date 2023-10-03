import { createI18n } from 'vue-i18n'
import en from "./en.json"
import ar from "./ar.json"
const i18n = createI18n( {
   locale: localStorage.getItem('lang'),
   messages: {
      EN: en,
      AR: ar
   }
} )



export default i18n