<template>
<q-card style="width:475px; max-width:500px">
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="saveTask()">
        <q-card-section class="q-pt-none">
            <modal-task-name :name.sync="taskInstance.name" ref="modalTaskName">ModalTaskName</modal-task-name>
            <modal-task-due-date :dueDate.sync="taskInstance.dueDate"></modal-task-due-date>
            <modal-task-due-time :dueTime.sync="taskInstance.dueTime" v-if="taskInstance.dueDate"></modal-task-due-time>
        </q-card-section>
        <modal-buttons @submit="saveTask()"></modal-buttons>
    </q-form>
</q-card>
</template>

<script>
import {
    emit
} from 'process';
import {
    mapActions
} from 'vuex'

export default {
    props: [
        'task'
    ],
    data() {
        let currTask = this.selectedTask()
        return {
            taskInstance: {
                id: currTask.id,
                name: currTask.name,
                dueDate: currTask.dueDate,
                dueTime: currTask.dueTime,
                completed: currTask.completed
            }
        }
    },

    methods: {
        ...mapActions('tasks', ['updateTask', 'updateChangedTask']),
        clearDateTime() {
            this.taskInstance.dueDate = '';
            this.taskInstance.dueTime = '';
        },
        selectedTask() {
            return this.$store.getters["tasks/getSelectedTask"];
        },
        saveTask() {
            this.showEditTask = false;
            this.updateTask(this.taskInstance)
            this.updateChangedTask(this.taskInstance)
            this.$emit("closeAfterEdit")
        }
    },
    components: {
        'modal-header': require('./shared/ModalHeader').default,
        'modal-task-name': require('./shared/ModalTaskName').default,
        'modal-task-due-date': require('./shared/ModalTaskDueDate').default,
        'modal-task-due-time': require('./shared/ModalTaskDueTime').default,
        'modal-buttons': require('./shared/ModalButtons').default
    }
}
</script>

<style lang="css">
  
</style>
