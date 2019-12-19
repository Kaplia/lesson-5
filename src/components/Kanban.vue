<template lang="pug">
    #container
        .content
             .coming-soon
                   p  Coming soon

</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Kanban extends Vue {

    }
</script>

<style>
    .coming-soon {
        text-align: center;
    }


</style>
