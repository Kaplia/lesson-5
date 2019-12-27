<template lang="pug">

    #container
        .content
            #card-tasks.card(style='display')
                .activity-tasks(v-for='(task, index) in taskList' :key='task.name')
                    .box.task-name
                        | {{task.name}}
                    .box.task-description
                        | {{task.description}}
                    .box.task-deadline
                        | {{task.deadline}}
                    .box.button
                        button.delete(v-on:click="taskList.splice(index, 1)")
                            i.far.fa-trash-alt
            form(v-on:submit.prevent="addNewTask")
                .card-form
                    div
                        p
                            input#name(type='text' placeholder='Tasks name' title="Заполните поле" required v-model="newTaskName")
                        p
                            textarea(name='comment' rows='4' placeholder='Description' title="Заполните поле" required v-model="newTaskText")
                    button.add ADD


</template>

<script lang="ts">

    interface TaskInterface {
        id: number;
        name: string;
        description: string;
        deadline: string;
    }

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Tasks extends Vue {
        public newTaskText: string = '';
        public taskList: TaskInterface[] = [
            {
                id: 1,
                name: '1 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '01.12.2019',
            },
            {
                id: 2,
                name: '2 task',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                deadline: '20.12.2019',
            },
        ];
        public nextTaskId: number = 3;
        public newTaskName: string = '';

        public addNewTask() {
            this.taskList.push({
                id: this.nextTaskId++,
                name: this.newTaskName,
                description: this.newTaskText,
                deadline: '',
            })
            ;
            this.newTaskName = '';
            this.newTaskText = '';
        }
    }
</script>

<style>
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

    .delete {
        border: none;
        cursor: pointer;
        outline: none;
    }

    .delete:active {
        color: #616161;
    }
</style>
