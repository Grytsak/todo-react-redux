import { ADD_NEW_TASK } from "../constants/action-types";
import { MARK_TASK_DONE } from "../constants/action-types";
import { DELETE_TASK } from "../constants/action-types";

export function addNewTask(payload) {
    return { type: ADD_NEW_TASK, payload }
};

export function markTaskDone(payload) {
  return { type: MARK_TASK_DONE, payload }
};

export function deleteTask(payload) {
  return { type: DELETE_TASK, payload }
};