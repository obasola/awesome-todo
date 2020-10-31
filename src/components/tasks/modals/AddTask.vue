<template>
<q-card style="width:475px; max-width:500px">

    <modal-header>Add Tasks</modal-header>

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
    data() {
        return {
            taskInstance: {
                id: 0,
                name: "",
                dueDate: "",
                dueTime: "",
                completed: false
            }
        }
    },

    methods: {
        ...mapActions('tasks', ['submitTask']),
        clearDateTime() {
            this.taskInstance.dueDate = '';
            this.taskInstance.dueTime = '';
        },
        saveTask() {
            this.showAddTask = false;
            this.submitTask(this.taskInstance)
            this.$emit("closeAfterSave")
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
