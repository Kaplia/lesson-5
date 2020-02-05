<template lang="pug">

    #container
        .content
            #card-tasks.card(style='display')
            .animation-tasks.activity-tasks(v-for='(task, index) in taskList' :key='task.name')(:style='animation(index)')
                    .box.task-name
                        | {{task.name}}
                    .box.task-description
                        | {{task.description}}
                    .box.task-deadline
                        | {{task.deadline}}
                    .box.task-status
                         select
                             option(value='todo', selected) To Do
                             option(value='inprogress') In Progress
                             option(value='done') Done
                    .box.button
                        button.delete(v-on:click="taskList.splice(index, 1)")
                            i.far.fa-trash-alt
            #app
               button.add(@click='modalOpened = true') Add Task
               modal(v-if='modalOpened' @close='modalOpened = false' @add-task="addNewTask")


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
    import Modal from '../components/Modal.vue';

    @Component({
        components: {
            modal: Modal,
        },
    })


    export default class Tasks extends Vue {
        public modalOpened: boolean = false;
        public taskList: TaskInterface[] = [
            {
                id: 1,
                name: '1 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '01.12.2019',
                status: '',
            },
            {
                id: 2,
                name: '2 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '20.12.2019',
                status: '',
            },
        ];

        public addNewTask(data: TaskInterface) {
            this.taskList.push({
                id: 1,
                name: data.name,
                description: data.description,
                deadline: '',
                status: 'To Do',
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

