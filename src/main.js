import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { store } from './store/store';
import { routes } from './routes';
import axios from 'axios';
Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: 'history' });
router.beforeResolve((to, from, next) => {
    if (to.name) {
        // Start the route progress bar.
        store.dispatch('actionMenuClicked');
    }
    next()
});
router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    //NProgress.done()
    store.dispatch('actionMenuClicked');
})
export const eventBus = new Vue();
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})