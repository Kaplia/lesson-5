<template lang="pug">
    #header-2.navbar
        .logo
            .contacts
                img(src='@/assets/user-1.jpg' alt='')
                img(src='@/assets/user-1.jpg' alt='')
                img(src='@/assets/user-1.jpg' alt='')
                button.share Share
                button.chat
                    i.fas.fa-comments
                    | Chat
            .name-logo
                img(src='@/assets/image-logo.png' alt='')
                p Website Redesign
        .navigation
            ul
                li
                    a(href='#' v-on:click="openbox('card-tasks')") Tasks
                li
                    a(href='') Kanban
                li
                    a(href='#' v-on:click="openbox('card-activity')") Activity
                li
                    a(href='') Calendar
                li
                    a(href='') Files

</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Sidebar extends Vue {
        openbox(id) {
            var all = document.querySelectorAll(".card");
            for (var i = 0; i < all.length; i++) {
                if (all[i].id == id) {
                    all[i].style.display = 'block'
                } else {
                    all[i].style.display = 'none';
                }
            }
        }
    }
</script>

<style scoped>
    .navbar {
        width: 80%;
        float: right;

    }

</style>
