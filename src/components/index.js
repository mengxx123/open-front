import header from './header'
import footer from './footer'
import page from './page'
import adminHeader from './admin-header'
import adminFooter from './admin-footer'
import mePage from './me-page'
import barMenu from './bar-menu'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-page', page)
        Vue.component('ui-me-page', mePage)
        Vue.component('ui-admin-header', adminHeader)
        Vue.component('ui-admin-footer', adminFooter)
        Vue.component('ui-bar-menu', barMenu)
    }
}
