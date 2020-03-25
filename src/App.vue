<template>
          <div class="main-wrapper" ref="class_main_wrapper">
            <app-header></app-header>
            <router-view></router-view>
            <app-footer></app-footer>
        </div>
</template>
<script>
import Header from './components/shared/Header.vue';
import Home from './components/Home.vue';
import Footer from './components/shared/Footer.vue';
import axios from 'axios';
export default {
  components: {
            appHeader: Header,
            appHome:Home,
            appFooter: Footer
        },
        mounted(){


}
}
</script>