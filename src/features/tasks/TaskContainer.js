import { connect } from 'react-redux';
import { markTaskDone, deleteTask } from '../tasks/tasksSlice';
import  Task  from './Task';

function mapDispatchToProps(dispatch) {
  return {
      markTaskDone: taskId => dispatch(markTaskDone(taskId)),
      deleteTask: taskId => dispatch(deleteTask(taskId))
  }
}

export default connect(null, mapDispatchToProps)(Task);


