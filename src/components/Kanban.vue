<template lang="pug">
    #container
        .content-1.box
            .navbar-task
                h1 To Do
            draggable.draggable(:list="tasks[TASK_STATUSES.TODO]"  group="task" @change="changeStatus($event, TASK_STATUSES.TODO)" )
              .card-task(v-for='(task, index) in tasks[TASK_STATUSES.TODO]' :key='task.id' @click='openModal(task, index)')
                .task-name
                    p {{task.name}}
                .task-deadline
                    p {{task.deadline}}
        .content-2.box
            .navbar-task
                h1 In Progress
            draggable.draggable( group="task" :list="tasks[TASK_STATUSES.IN_PROGRESS]"   @change="changeStatus($event, TASK_STATUSES.IN_PROGRESS)")
              .card-task(v-for='(task, index) in tasks[TASK_STATUSES.IN_PROGRESS]' :key='task.id' @click='openModal(task, index)')
                .task-name
                    p {{task.name}}
                .task-deadline
                    p {{task.deadline}}
        .content-3.box
            .navbar-task
                h1 Done
            draggable.draggable(group="task" :list="tasks[TASK_STATUSES.DONE]"   @change="changeStatus($event, TASK_STATUSES.DONE)")
              .card-task(v-for='(task, index) in tasks[TASK_STATUSES.DONE]' :key='task.id' @click='openModal(task, index)')
                .task-name
                    p {{task.name}}
                .task-deadline
                    p {{task.deadline}}
        taskDetailsModal(v-if='openEditing' :task='openedTask' :index='openedTaskIndex' @close='closeModal' @inStatusChanged='inStatusChanged')



</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import TaskDetailsModal from '../components/TaskDetailsModal.vue';
    import {TaskInterface} from '@/interfaces/task.interface';
    import {TASK_STATUSES, TaskStatuses} from '@/static/task-status.constant';
    import draggable from 'vuedraggable';
    import {ChangeStatusInterface} from '@/interfaces/change-status.interface';

    @Component({
        components: {
            taskDetailsModal: TaskDetailsModal,
            draggable,
        },
    })
    export default class Kanban extends Vue {
        public detailsOpened: boolean = false;
        public TASK_STATUSES: any = TASK_STATUSES;
        public tasks: any = {
            [TASK_STATUSES.TODO]: [
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
            ],
            [TASK_STATUSES.IN_PROGRESS]: [
                {
                    id: 3,
                    name: '3 task',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    deadline: '2020-01-12',
                    status: TaskStatuses.IN_PROGRESS,
                },
            ],
            [TASK_STATUSES.DONE]: [
                {
                    id: 4,
                    name: '4 task',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    deadline: '2020-01-12',
                    status: TaskStatuses.DONE,
                },
                {
                    id: 5,
                    name: '5 task',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    deadline: '2020-01-10',
                    status: TaskStatuses.DONE,
                },
                {
                    id: 6,
                    name: '6 task',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    deadline: '2020-01-10',
                    status: TaskStatuses.DONE,
                },
            ],
        }; // todo create interface
        public openEditing: boolean = false;
        public openedTask: TaskInterface;
        public openedTaskIndex: number;

        public openModal(task: TaskInterface, index: number) {
            this.openEditing = true;
            this.openedTask = task;
            this.openedTaskIndex = index;
        }
        public closeModal() {
            this.openEditing = false;
            this.openedTask = null;
        }
        public inStatusChanged(data: ChangeStatusInterface) {
            this.tasks[data.newStatus].push({
                ...data.task,
                status: data.newStatus,
            });
            this.tasks[data.prevStatus].splice(data.index, 1);
        }

        public changeStatus(elt, newStatus: string) {
            if (elt.added) {
                this.tasks[newStatus][elt.added.newIndex].status = newStatus;
            }
        }

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
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
    }

    .navbar-task h1 {
        opacity: 0.5;
        font: bold 14px/17px Helvetica;
        color: #131313;
        text-align: left;
        line-height: 40px;
    }

    #container {
        display: flex;
    }

    .box {
        width: 100%;
        margin: 2%;
    }

    .content-1 {
        background-color: white;
        border-radius: 8px;
        width: 30%;
        margin-right: 1%;
        margin-left: 3%;
        margin-bottom: 3%;
        padding: 0;
    }

    .content-2 {
        background-color: white;
        border-radius: 8px;
        width: 30%;
        margin-right: 1%;
        margin-bottom: 3%;
        padding: 0;
    }

    .content-3 {
        background-color: white;
        border-radius: 8px;
        width: 30%;
        margin-right: 3%;
        margin-bottom: 3%;
        padding: 0;
    }

    .draggable {
        min-height: calc(100% - 40px);
    }


</style>
