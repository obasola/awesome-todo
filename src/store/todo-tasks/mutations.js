import Vue from 'vue'

export function updateTask(state, payload) {
    console.log("Mutation: updateTask called, payload = "+payload+' state= '+state)
    //state.task.completed =  payload.updated.completed
    let taskInstance = state.tasks[payload.id]
    taskInstance.completed = payload.updated.completed
    Object.assign(state.tasks[payload.id],payload.updated.completed)
    
}
export function deleteTasks(state, id) {
    Vue.delete(state.tasks, id)
}