import { connect } from 'react-redux';
import { addNewTask } from './tasksSlice';
import AddTask from './AddTask';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

function mapDispatchToProps(dispatch) {
  return {
      addNewTask: title => dispatch(addNewTask(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);