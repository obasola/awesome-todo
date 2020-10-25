<template>
<q-card style="width:475px; max-width:500px">
    <q-card-section class="row">
        <div class="text-h6">New Task</div>
        <q-space />
        <q-btn round color="secondary" icon="close" v-close-popup />
    </q-card-section>

    <q-form @submit.prevent="saveTask()">
        <q-card-section class="q-pt-none">
            <div class="row q-mb-sm">
                <q-input ref="name" outlined label="Name" v-model="taskInstance.name" class="col" :rules="[val => !!val || 'Field is required']" autofocus @keyup.enter="prompt = false" />
            </div>

            <div class="row q-mb-sm">
                <q-input outlined label="Due Date" v-model="taskInstance.dueDate" class="col">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="taskInstance.dueDate">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

            <div class="row q-mb-sm">
                <q-input outlined label="Due Time" v-model="taskInstance.dueTime" class="col">
                    <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-time v-model="taskInstance.dueTime">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-time>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn round color="primary" label="Save" type="submit" />
        </q-card-actions>
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

        saveTask() {
            this.showAddTask = false;
            //this.$refs.name.validate();
            this.submitTask(this.taskInstance)
            this.$emit("closeAfterSave")
        }
    }
}
</script>
