<template>
<q-page class="q-pa-md">
    <h2 class="padd">To Do List</h2>

    <div class="padd">
        <q-list separator bordered>
            <tasks v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></tasks>
        </q-list>
        <div class="floatRight">
            <q-btn round color="secondary" icon="navigation" />
        </div>
    </div>
</q-page>
</template>

<script>
import {
    mapGetters
} from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        // Replace with mapGetters (the PRO way)
        tasks() {
            return this.$store.getters["tasks/getAllTasks"];
        },

        //  ...mapGetters("tasks", ["getAllTasks"]),
    },
    components: {
        'tasks': require('../components/tasks/tasks').default
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
