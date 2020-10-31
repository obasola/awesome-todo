<template>
<q-page class="q-pa-md">
    <h2 class="padd">To Do List</h2>

    <div class="padd">
        <q-list v-if="Object.keys(tasks).length" separator bordered>
            <tasks v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></tasks>
        </q-list>
        <div class="absolute-bottom text-center q-mb-lg">
            <q-btn round color="secondary" icon="add" @click="addNewTask()" />
        </div>
    </div>

    <div class="q-pa-md q-gutter-sm">

        <q-dialog v-model="showAddTask">
            <add-task @closeAfterSave="showAddTask = false" />
        </q-dialog>

    </div>
</q-page>
</template>

<script>
import {
    mapGetters
} from "vuex";

export default {
    data() {
        return {
            showAddTask: false
        };
    },
    computed: {
        // Replace with mapGetters (the PRO way)
        tasks() {
            return this.$store.getters["tasks/getAllTasks"];
        },

        //  ...mapGetters("tasks", ["getAllTasks"]),
    },
    methods: {
        addNewTask() {
            this.showAddTask = true;
        }
    },
    components: {
        'tasks': require('../components/tasks/tasks').default,
        'add-task': require('../components/tasks/modals/AddTask').default
    }

};
</script>

<style lang="scss">
.padd {
    margin-left: 20px;
    background-color: bg-blue-3;
}

.floatRight {
    float: right;

}
</style>
