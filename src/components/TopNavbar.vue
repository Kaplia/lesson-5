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
                    router-link(to="/tasks") Tasks
                li
                    router-link(to="/kanban") Kanban
                li
                    router-link(to="/activity") Activity
                li
                    router-link(to="/calendar") Calendar
                li
                    router-link(to="/files") Files

</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class TopNavbar extends Vue {
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
