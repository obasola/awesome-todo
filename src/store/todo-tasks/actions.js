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
export function editSelectedTask({commit}, task) {
    commit('editTaskSelection', task)
}
export function showTaskSelection({commit}, task) {
    commit('showTaskSelected', task)
}

export function submitTask( {commit}, task) {
    commit( 'submitTask', task)
}

export function taskSelected(state, id) {
   let key = 'ID' + id
    return state.tasks[key];
}

export function selectedTask() {
  editTaskStatus({commit}, task)
}

