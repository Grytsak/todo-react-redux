import { connect } from 'react-redux';
import { addNewTask } from './tasksSlice';
import AddTask from './AddTask';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

function mapDispatchToProps(dispatch) {
  return {
      addNewTask: name => dispatch(addNewTask(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);