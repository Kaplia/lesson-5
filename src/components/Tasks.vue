<template lang="pug">

    #container
        .content
            #card-tasks.card(style='display')
            .animation-tasks.activity-tasks(v-for='(task, index) in taskList' :key='task.name')(:style='animation(index)' @click='openedTask = task.id')
                    .box.task-name
                        | {{task.name}}
                    .box.task-description
                        | {{task.description}}
                    .box.task-deadline
                        | {{task.deadline}}
                    .box.task-status
                        | {{task.status}}
                    .box.button
                        button.delete(v-on:click="taskList.splice(index, 1)")
                            i.far.fa-trash-alt
                    taskDetailsModal(v-if='openedTask === task.id' :task='task')
            #app
               button.add(@click='modalOpened = true') Add Task
               modal(v-if='modalOpened' @close='modalOpened = false' @add-task="addNewTask")


</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {TaskInterface} from '@/interfaces/task.interface';
    import Modal from '../components/Modal.vue';
    import TaskDetailsModal from '../components/TaskDetailsModal.vue';
    import {TASK_STATUSES, TaskStatuses} from '@/static/task-status.constant';

    @Component({
        components: {
            modal: Modal,
            taskDetailsModal: TaskDetailsModal,
        },
    })


    export default class Tasks extends Vue {
        public modalOpened: boolean = false;
        public detailsOpened: boolean = false;
        public taskList: TaskInterface[] = [
            {
                id: 1,
                name: '1 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '2020-01-12',
                status: TaskStatuses.TODO,
            },
            {
                id: 2,
                name: '2 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '2020-01-10',
                status: TaskStatuses.TODO,
            },
        ];
        public openedTask: number = 0;

        public addNewTask(data: TaskInterface) {
            this.taskList.push({
                id: 1,
                name: data.name,
                description: data.description,
                deadline: data.deadline,
                status: TaskStatuses.TODO,
            });
            this.modalOpened = false;
        }

        public animation(i: any) {
            return {'animation-delay': (i * 1) + 's'};
        }

    }
</script>


<style>
    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 3px;
        padding: 5%;
    }
    select::-ms-expand {
        display: none;
    }

    .card-form {
        border: solid 1px #FFC200;
        border-radius: 5px;
        padding: 20px;
    }

    .add {
        float: right;
        border: solid 1px #FFC200;
        height: 30px;
        width: 67px;
        background-color: #FFF8DD;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        color: #FFC200;
        vertical-align: middle;
        font: bold 14px/17px Helvetica;
        margin-right: 7px;
        margin-top: 2%;
    }

    .add:active {
        border: none;
    }

    .add-task {
        border: solid 1px #FFC200;
        height: 30px;
        background-color: #FFF8DD;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        color: #FFC200;
        vertical-align: middle;
        font: bold 14px/17px Helvetica;
        margin-right: 7px;
    }

    #name {
        width: 98%;
        height: 30px;
    }

    p {
        margin-bottom: 10px;
    }

    textarea {
        resize: none;
        width: 98%;
    }

    form {
        margin-top: 5px;

    }

    .delete {
        border: none;
        cursor: pointer;
        outline: none;
    }

    .delete:active {
        color: #616161;
    }

    .animation-tasks {
        -webkit-animation-name: example2;
        -webkit-animation-duration: 2s;
        animation-name: example2;
        animation-duration: 2s;
        cursor: pointer;

    }

    @keyframes example2{
        0% {
            font-size: 16px;
        }
        50% {
            font-size: 16.5px;
        }
        100% {
            font-size: 16px;
        }
    }

    .activity-tasks {
        border-radius: 5px;
        margin-bottom: 5px;
        border: 1px solid white;
        font: 16px Helvetica;
        transition: all .5s ease;
    }

    .activity-tasks:hover  {
        border: 1px solid #FFC200;
    }
</style>

