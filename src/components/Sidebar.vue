<template lang="pug">
    .sidebar.menu_box
        #header-1
            img(src='@/assets/menu-logo.png' alt='')
            p PROJECTUS
        #user(v-for='user in users' :key='user.name')
            img.user-avatar(src='@/assets/user-1.jpg' alt='')
            .user-name
                h5  {{user.name}}
                h6  {{user.status}}
        #tasks(v-for='task in tasks' :key='task.name')
            .rightcol
                router-link(to="/tasks")
                    h3.open-tasks {{task.open}}
                    h6 Open Tasks
            .leftcol
                h3.completed-tasks(v-on:click='completeTask()')  {{task.completed}}
                h6 Completed Tasks
        #menu
            .header MENU
            ul.v-menu
                li
                    a(href='') Home
                li
                    a(href='') My Tasks
                li
                    a(href='')
                        | Notifications
                        p.notifications 3
</template>

<script lang="ts">
    // todo: refactor
    let completedTasks: any = document.querySelector(".completed-tasks");
    let openTasks: any = document.querySelector(".open-tasks");

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Sidebar extends Vue {
        users: any[] = [
            {
                name: "Jean Gonzales",
                status: "Product Owner"
            }
        ];
        tasks: any[] = [
            {
                open: "2",
                completed: "237"
            }
        ];

        completeTask() {
            completedTasks = document.querySelector('.completed-tasks').innerHTML;
            openTasks = document.querySelector('.open-tasks').innerHTML;
            if (openTasks != 0) {
              if (confirm("Are you sure you want to change the number of tasks?")) {
                openTasks--;
                completedTasks++;
              } else {
                alert("Cancel")
              }
              document.querySelector('.completed-tasks').innerHTML = completedTasks;
              document.querySelector('.open-tasks').innerHTML = openTasks;
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        height: 100%;
        width: 20%;
        background: #000000;
        float: left;
        overflow: hidden;
        position: fixed;
    }

    #header-1 img {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 19px;
        margin-right: 2%;
    }
</style>
