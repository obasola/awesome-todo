import Vue from 'vue'
import {uid} from 'quasar'

export function showTaskSelected(state, task) {
  Object.assign(state.taskSelection, task)
}
export function updateTask(state, payload) {
    console.log("Mutation: updateTask called, payload = "+payload+' state= '+state)
    //state.task.completed =  payload.updated.completed
    let taskInstance = state.tasks[payload.id]
    taskInstance.completed = payload.updated.completed
    Object.assign(state.tasks[payload.id],payload.updated.completed)
    
}
export function taskSelection(state, task) {
    state.taskSelection.id = task.id
    state.taskSelection.name = task.name
    state.taskSelection.dueDate = task.dueDate
    state.taskSelection.dueTime = task.dueTime
    state.taskSelection.completed = task.completed

    //Object.assign(state.taskSelection,task)
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