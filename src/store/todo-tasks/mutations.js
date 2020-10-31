import Vue from 'vue'
import {uid} from 'quasar'

export function updateTask(state, payload) {
    console.log("Mutation: updateTask called, payload = "+payload+' state= '+state)
    //state.task.completed =  payload.updated.completed
    let taskInstance = state.tasks[payload.id]
    taskInstance.completed = payload.updated.completed
    Object.assign(state.tasks[payload.id],payload.updated.completed)
    
}
export function updateEditFlag(state, flag) {
    Vue.set(state.showEditFlag,'',flag);
}
export function deleteTasks(state, id) {
    Vue.delete(state.tasks, id)
}

export function submitTask(state, task) {
    task.id = uid();
    let payload = {
        id: task.id,
        task: task
    }
    // Vue.set(<data in store we want to add to>,<key>,<data to add>)
    Vue.set(state.tasks, payload.id, payload.task)
}