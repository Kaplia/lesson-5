<template lang="pug">
   .container
          .modal-mask
              .modal-wrapper
                 .modal-container
                    button.modal-default-button(@click="$emit('close')" v-if='!editingTask')
                        i.fas.fa-times
                    div(v-if='!editingTask')
                        .box
                             .task-name {{task.name}}
                        .box
                             .task-description {{task.description}}
                        .box
                             .task-name {{task.deadline}}
                        .box
                             .task-status {{task.status}}
                        div.edit(@click='editingTask = true;') EDIT
                    form(v-if='editingTask')
                        .box
                             .task-name
                                textarea( v-model='taskEdit.name' @input='saveTask = true')
                        .box
                             .task-description
                                textarea( v-model='taskEdit.description' @input='saveTask = true')
                        .box
                             .task-deadline
                                input(type="date" v-model='taskEdit.deadline' @input='saveTask = true')
                        .box
                             .task-status
                                 select(v-model='taskEdit.status'  @input='saveTask = true')
                                      option(:value='taskStatuses.TODO') {{taskStatuses.TODO}}
                                      option(:value='taskStatuses.IN_PROGRESS') {{taskStatuses.IN_PROGRESS}}
                                      option(:value='taskStatuses.DONE') {{taskStatuses.DONE}}
                        button.cancel(type='button' @click="$emit('close')" v-if='editingTask') CANCEL
                        button.save(type='button' @click='addEditingTask(), detailsOpened = false' v-if='saveTask') SAVE

</template>

<script lang="ts">


    import {Component, Vue} from 'vue-property-decorator';
    import {TaskInterface} from '@/interfaces/task.interface';
    import {TaskStatuses} from '@/static/task-status.constant';
    import {ChangeStatusInterface} from '@/interfaces/change-status.interface';

    @Component({
        props: ['task', 'index'],
    })
    export default class TaskDetailsModal extends Vue {
        public saveTask: boolean = false;
        public detailsOpened: boolean = true;
        public editingTask: boolean = false;
        public taskEdit: TaskInterface = {} as TaskInterface;
        public taskStatuses: any = TaskStatuses;


        public addEditingTask() {
            const statusChanged: boolean = this.$props.task.status !== this.taskEdit.status;
            this.$props.task.name = this.taskEdit.name;
            this.$props.task.description = this.taskEdit.description;
            this.$props.task.deadline = this.taskEdit.deadline;

            if (statusChanged) {
                const data: ChangeStatusInterface = {
                    index: this.$props.index,
                    newStatus: this.taskEdit.status,
                    prevStatus: this.$props.task.status,
                    task: this.$props.task,
                };
                this.$emit('inStatusChanged', data);
            }

            this.$emit('close');

        }

        private created() {
            this.taskEdit = Object.assign({}, this.$props.task);
        }
    }
</script>

<style scoped>
    form {
        padding: 2%;
    }

    .edit {
        float: right;
        border: solid 1px #FFC200;
        height: 20px;
        width: 67px;
        background-color: #FFF8DD;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        color: #FFC200;
        vertical-align: middle;
        font: bold 14px/17px Helvetica;
        margin-right: 7px;
        margin-bottom: 8%;
        text-align: center;
        padding-top: 5px;
    }

    .edit:active {
        border: none;
    }

    .save {
        float: right;
        border: solid 1px #009400;
        height: 30px;
        width: 67px;
        background-color: #e2ffe2;
        border-radius: 15px;
        cursor: pointer;
        outline: none;
        color: #009400;
        vertical-align: middle;
        font: bold 14px/17px Helvetica;
        margin-right: 7px;
        margin-bottom: 8%;
    }

    .save:active {
        border: none;
    }

    .cancel {
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
        margin-bottom: 8%;
    }

    .cancel:active {
        border: none;
    }

    .task-name {
        text-align: left;
        background-color: white;
        font: 18px/20px Helvetica;
        color: #131313;
    }

    .task-description {
        background-color: white;
        font: 16px/20px Helvetica;
        color: #131313;
    }

    .task-deadline {
        background-color: white;
        font: 14px/20px Helvetica;
        color: #898989;
    }

    .task-status {
        background-color: white;
        font: 14px/20px Helvetica;
        color: #898989;
    }

    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 3px;
        padding: 1%;
    }

    select::-ms-expand {
        display: none;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 50%;
        margin: 0px auto;
        padding: 35px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }


    .modal-default-button {
        float: right;
        border: none;
        color: #131313;
        cursor: pointer;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>