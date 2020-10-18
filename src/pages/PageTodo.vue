<template>
<q-page class="q-pa-md">
    <h2 class="padd">To Do List</h2>

    <div class="padd">
        <q-list separator bordered>
            <q-item v-for="task in tasks" :key="task.id" :class="task.completed ? 'bg-green-1' : 'bg-orange-1'" @click="task.completed = !task.completed" clickable v-ripple>
                <q-item-section>
                    <q-checkbox v-model="task.completed">
                        <q-item-label class="{ 'text-strikethrough' : task.completed}">{{
                task.name
              }}</q-item-label>
                    </q-checkbox>
                </q-item-section>
                <q-item-section>
                    <div class="row">
                        <div class="column justify-center">
                            <q-icon name="event" size="18px" class="q-mr-xs" />
                        </div>
                        <div class="column">
                            <q-item-label class="row justify-end" caption>{{
                  task.dueDate
                }}</q-item-label>
                            <q-item-label class="row justify-end" caption>
                                <small>{{ task.dueTime }}</small>
                            </q-item-label>
                        </div>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
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
};
</script>

<style lang="scss">
.padd {
    margin-left: 20px;
    background-color: bg-blue-3;
}
</style>
