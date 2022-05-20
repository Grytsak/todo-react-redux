import { connect } from 'react-redux';
import { markTaskDone, deleteTask } from '../tasks/tasksSlice';
import  Task  from './Task';

function mapDispatchToProps(dispatch) {
  return {
      markTaskDone: (id, completed) => {
        dispatch(markTaskDone({id, completed}))
      },
      deleteTask: id => dispatch(deleteTask(id))
  }
}

export default connect(null, mapDispatchToProps)(Task);


