import { connect } from 'react-redux';
import { addNewTask } from './tasksSlice';
import AddTask from './AddTask';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

function mapDispatchToProps(dispatch) {
  return {
      addNewTask: taskId => dispatch(addNewTask(taskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);