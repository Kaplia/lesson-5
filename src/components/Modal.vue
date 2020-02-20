<template lang="pug">
   .container(v-if="modalOpened")
           .modal-mask
              .modal-wrapper
                 .modal-container
                    button.modal-default-button(@click="$emit('close')")
                        i.fas.fa-times
                    form(v-on:submit.prevent="$emit('add-task', newTask)")
                        .card-form
                            div
                                p
                                    input#name(type='text' placeholder='Tasks name' title="Заполните поле" required v-model="newTask.name")
                                p
                                    textarea(name='comment' rows='4' placeholder='Description' title="Заполните поле" required v-model="newTask.description")
                                p
                                    input(type="date" title="Заполните поле" required v-model="newTask.deadline")
                            button.add ADD



</template>

<script lang="ts">

    import {TaskInterface} from '../interfaces/task.interface';

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Modal extends Vue {
        public modalOpened: boolean = true;
        public newTask: TaskInterface = {} as TaskInterface;
    }
</script>

<style scoped>
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
        padding: 20px 30px;
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