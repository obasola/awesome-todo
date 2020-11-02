<template>
<q-item :class="task.completed ? 'bg-green-1' : 'bg-orange-1'" @click="updateTasks({id: id, updated: { completed: !task.completed}})" clickable v-ripple>
    <q-item-section>
        <q-checkbox :value="task.completed" class="no-pointer-events">
            <q-item-label :class="{ 'text-strikethrough' : task.completed}">
                {{task.name}}
            </q-item-label>
        </q-checkbox>

    </q-item-section>
    <q-item-section side v-if="task.dueDate">
        <div class="row">
            <div class="column justify-center">
                <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
                <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
                <q-item-label class="row justify-end" caption>
                    <small>{{ task.dueTime }}</small>
                </q-item-label>
            </div>
        </div>
    </q-item-section>
    <q-item-section side>
        <div class="row">
            <q-btn @click.stop="promptToEdit(task)" flat round dense color="primary" icon="edit" />
            <q-btn @click.stop="promptToDelete(id)" flat round dense color="red" icon="delete" />
        </div>
    </q-item-section>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="showEditTask">
            <edit-task @closeAfterEdit="showEditTask = false" />
        </q-dialog>
    </div>
    <q-dialog v-model="confirm" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <q-avatar icon="delete" color="red" text-color="white" />
                <span class="q-ml-sm">Are you sure you want to Delete the selected item?</span>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Yes" color="primary" v-close-popup @click="deleteOk(id)" />
                <q-btn flat label="No" color="primary" v-close-popup @click="deleteCancel()" />
            </q-card-actions>
        </q-card>
    </q-dialog>

</q-item>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    props: ['task', 'id'],
    data() {
        return {
            confirm: false,
            showEditTask: false
        }
    },
    methods: {
        // function( STORE MODULE, FUNCTIONS declared in actions)
        ...mapActions('tasks', ['updateTasks', 'deleteTasks', 'showTaskSelection']),
        deleteOk(id) {
            this.deleteTasks(id);

        },
        deleteCancel() {
            alert("Delete aborted");
        },
        promptToDelete(id) {
            this.confirm = true

        },
        promptToEdit(task) {

            this.showTaskSelection(task)
            this.showEditTask = true
        }
    },
    components: {
        'edit-task': require('./modals/EditTask').default
    }
}
</script>

<style lang="scss">
    
</style>
