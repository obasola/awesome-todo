/**
 * Data is changed by creating action functions that CALL a Mutation
 */
export function updateTasks( {commit}, payload) {
    console.log("update action called, payload = "+payload)
  //  payload.task.completed = payload.updated.completed
    commit('updateTask', payload)
    console.log("update action called, payload = "+payload)
}
export function deleteTasks ( {commit}, id) {
    commit('deleteTasks', id)
}
export function updateEditFlag({commit}, flag) {
    commit('updateEditFlag', flag)
}
export function submitTask( {commit}, task) {
    commit( 'submitTask', task)
}