<template>
    <router-view/>
</template>

<script lang="ts">

    interface TaskInterface {
        name: string;
        description: string;
        deadline: string;
    }

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Content extends Vue {
        // activity: any[] = [
        //     {
        //         task: "Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
        //         time: "8:40 PM"
        //     },
        //     {
        //         task: "Emilee Simchenko commented on Account for teams and personal in bottom style",
        //         time: "7:32 PM"
        //     },
        //     {
        //         task: "Darika Samak uploaded 4 files on An option to search in current projects or in all projects",
        //         time: "6:02 PM"
        //     },
        // ];
        // taskList: TaskInterface[] = [
        //     {
        //         name: "1 task",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //         deadline: "01.12.2019"
        //     },
        //     {
        //         name: "2 task",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //         deadline: "20.12.2019"
        //     },
        //     {
        //         name: "3 task",
        //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //         deadline: "1.01.2020"
        //     },
        // ];
        //
        // imageClick(id) {
        //     document.querySelector('.notifications').innerHTML = id;
        // }
    }
</script>

<style>
    #container {
        overflow: auto;
        float: right;
        height: 100vh;
        width: 80%;
        background: #eeebe5;
    }

    #container .content {
        background-color: white;
        border-radius: 8px;
        width: 65%;
        margin-right: 15%;
        margin-left: 15%;
    }

</style>
