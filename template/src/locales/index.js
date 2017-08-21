import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Set default from hostname
const lang = process.env.DEFAULT_LANGUAGE

// Load locales
import da from './da'
import en from './en'

const messages = {
    da: da,
    en: en
}

Vue.config.lang = lang

export default new VueI18n({
    locale: lang,
    fallbackLocale: 'da',
    messages
})
