import { connect } from 'react-redux'
import { setVisibilityFilter } from './filtersSlice'
import Filter from './Filter'


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filters
})

const mapDispatchToProps = {
  setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
