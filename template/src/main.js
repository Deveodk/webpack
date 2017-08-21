/**
 * Deveo Core Vue starter template
 * Made with <3 and coffee by Deveo (https://deveo.io)
 */
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueAxios from 'vue-axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Raven from 'raven-js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RavenVue from 'raven-js/plugins/vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
if (process.env.NODE_ENV !== 'development') {
    Raven
        .config('', {
            environment: process.env.NODE_ENV{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        })
        .addPlugin(RavenVue, Vue)
        .install(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Vue.prototype.$raven = Raven
}

Vue.config.productionTip = process.env.PRODUCTION_TIP{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.debug = process.env.DEBUG_MODE{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.devtools = process.env.DEV_TOOLS{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import i18n from './locales/index'

import VueMoment from 'vue-moment'
Vue.use(VueMoment)
require('moment/locale/da')

/**
 * Deveo packages
 */

import VueToastr from '@deveodk/vue-toastr'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 5000
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import online from '@deveodk/vue-online'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(online, {}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import vueSeo from '@deveodk/vue-seo'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(vueSeo){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import errorTracker from '@deveodk/vue-error-tracker'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(errorTracker, {
    HttpDriver: require('@deveodk/vue-error-tracker/drivers/http/axios.js'),
    NotificationDriver: require('@deveodk/vue-error-tracker/drivers/notification/deveoToastr.js'),
    ReportDriver: require('@deveodk/vue-error-tracker/drivers/report/sentry.js'),
    HttpErrorCodes: {
        400: {
            title: 'Ukendt fejl',
            message: 'Noget gik galt',
            type: 'error'
        },

        500: {
            title: 'Server fejl',
            message: 'Åhh nej noget er gået galt',
            type: 'error'
        }
    }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.router = router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const API_URL = process.env.API_URL{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
axios.defaults.baseURL = API_URL + '/v1/'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueAxios, axios){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import vueCoreAuthenticator from '@deveodk/vue-core-authenticator'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '@deveodk/vue-core-authenticator/dist/@deveodk/vue-core-authenticator.css'
Vue.use(vueCoreAuthenticator, {
    baseURL: API_URL,
    facebookClientId: '',
    googleClientId: ''
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  i18n,
  computed: {
    language() {
        return Vue.config.lang
    }
  },
  watch: {
    language() {
        moment.locale(this.language)
    }
  },
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
