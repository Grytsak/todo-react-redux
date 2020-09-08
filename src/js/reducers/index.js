import { ADD_NEW_TASK } from "../constants/action-types";
import { MARK_TASK_DONE } from "../constants/action-types";
import { DELETE_TASK } from "../constants/action-types";

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      complete: false
    },
    {
      id: 2,
      title: 'Task 2',
      complete: false
    },
    {
      id: 3,
      title: 'Task 3',
      complete: false
    }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_NEW_TASK) {
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    });
  }

  if (action.type === MARK_TASK_DONE) {
    const tasks = [...state.tasks];

    tasks.map(task => {
      if (task.id === action.payload) {
        task.complete = !task.complete;
      }
      return task;
    })

    return Object.assign({}, state, {
      tasks: tasks
    });
  }

  if(action.type === DELETE_TASK) {
    const tasks = [...state.tasks];

    tasks.map((task, index) => {
      if (task.id === action.payload) {
        tasks.splice(index, 1);
      }
      return task;
    })

    return Object.assign({}, state, {
      tasks: tasks
    });
  }
  return state;
}

export default rootReducer;
