import { connect } from 'react-redux'
import { setVisibilityFilter } from '../filters/filtersSlice'
import Filters from './Filters'


const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = {
  setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)