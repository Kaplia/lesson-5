<template lang="pug">
    #container
        .content-1.box
            .navbar-task
                h1 To Do

            .card-task(v-for='(task, index) in taskList' :key='task.id' @click='openedTask = task.id')
                .task-name
                    p {{task.name}}
                .task-deadline
                    p {{task.deadline}}
                taskDetailsModal(v-if='openedTask === task.id' :task='task')
        .content-2.box
            .navbar-task
                h1 In Progress
            .card-task
        .content-3.box
            .navbar-task
                h1 Done
            .card-task


</template>

<script lang="ts">

    interface TaskInterface {
        id: number;
        name: string;
        description: string;
        deadline: string;
        status: string;
    }

    import {Component, Vue} from 'vue-property-decorator';
    import TaskDetailsModal from '../components/TaskDetailsModal.vue';

    @Component({
        components: {
            taskDetailsModal: TaskDetailsModal,
        },
    })
    export default class Kanban extends Vue {
        public detailsOpened: boolean = false;
        public taskList: TaskInterface[] = [
            {
                id: 1,
                name: '1 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '2020-01-12',
                status: '',
            },
            {
                id: 2,
                name: '2 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '2020-01-10',
                status: '',
            },
        ];
        public openedTask: number = 0;


        // public closeModal() {
        //     // console.log(this);
        //     console.log(this.openedTask);
        // }


    }

</script>

<style>
    .task-name p {
        font: 18px/20px Helvetica;
        color: #131313;
    }

    .task-deadline p {
        text-align: right;
        font: 14px/20px Helvetica;
        color: #898989;
    }

    .card-task {
        border: 2px solid #e7e7e7;
        border-radius: 8px;
        background: #f1f1f1;
        margin: 3%;
        padding: 2%;
        cursor: pointer;
    }

    .card-task:hover {
        border: 2px solid #dddddd;
    }

    p {
        color: #131313;
        font: 14px/20px Helvetica;
    }

    .navbar-task {
        border-radius: 8px 8px 0 0;
        margin: 0;
        padding: 5%;
    }

    .navbar-task h1 {
        opacity: 0.5;
        font: bold 14px/17px Helvetica;
        color: #131313;
        text-align: left;
    }
    #container {
        display: flex;
    }

    .box {
        width: 100%;
        margin: 2%;
    }

    .content-1 {
        background-color:  white;
        border-radius: 8px;
        width: 30%;
        margin-right: 1%;
        margin-left: 3%;
        margin-bottom: 3%;
        padding: 0;
    }

    .content-2 {
        background-color:  white;
        border-radius: 8px;
        width: 30%;
        margin-right: 1%;
        margin-bottom: 3%;
        padding: 0;
    }

    .content-3 {
        background-color:  white;
        border-radius: 8px;
        width: 30%;
        margin-right: 3%;
        margin-bottom: 3%;
        padding: 0;
    }


</style>
