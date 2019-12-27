<template lang="pug">
    #container
        .content
            #card-activity.card(style='display')
                .day TODAY
                .activity-tasks(v-for='taskActivity in activity' :key='taskActivity.name')
                    .box.box-1
                         h1  {{taskActivity.task}}
                         // <h2></h2>
                         // <h3></h3>
                    .box.box-2
                         p  {{taskActivity.time}}
                .task
                     p
                         | During a project build, it is necessary to
                         | evaluate the product design and development
                         | against project requirements and outcomes
                p.image
                     img(src='@/assets/image-1.jpg' alt='Фотография 1' width='100' height='100' v-on:click='imageClick(0)')
                     img(src='@/assets/image-2.jpg' alt='Фотография 2' width='100' height='100' v-on:click='imageClick(1)')
                     img(src='@/assets/image-3.jpg' alt='Фотография 3' width='100' height='100' v-on:click='imageClick(2)')
                     img(src='@/assets/image-4.jpg' alt='Фотография 4' width='100' height='100' v-on:click='imageClick(3)')

</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Activity extends Vue {
        public name: string = 'activity';
        public activity: any[] = [
            {
                task: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
                time: '8:40 PM',
            },
            {
                task: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
                time: '7:32 PM',
            },
            {
                task: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
                time: '6:02 PM',
            },
        ];

        public imageClick(id: number) {
            document.querySelector('.notifications')!.innerHTML = id + '';
        }
    }
</script>

<style>


</style>
