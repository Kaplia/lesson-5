<template lang="pug">
    #container
        .content
            #card-tasks.card(style='display')
                .activity-tasks(v-for='task in taskList' :key='task.name')
                    .box.task-name
                        | {{task.name}}
                    .box.task-description
                        | {{task.description}}
                    .box.task-deadline
                        | {{task.deadline}}

</template>

<script lang="ts">

    interface TaskInterface {
        name: string;
        description: string;
        deadline: string;
    }

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Tasks extends Vue {
        taskList: TaskInterface[] = [
            {
                name: "1 task",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                deadline: "01.12.2019"
            },
            {
                name: "2 task",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                deadline: "20.12.2019"
            },
        ];
    }
</script>

<style>


</style>
