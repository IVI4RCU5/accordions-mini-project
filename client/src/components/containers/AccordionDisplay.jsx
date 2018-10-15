import { connect } from 'react-redux';
import AccordionList from '../presentational/AccordionList.jsx'

const toggleOpen = (target) => ({type: 'TOGGLE_OPEN', target})

const mapStateToProps = (state) => ({
  accordions: state.accordions
})

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: (index) => dispatch(toggleOpen(index))
})

const AccordionDisplay = connect(mapStateToProps, mapDispatchToProps)(AccordionList)

export default AccordionDisplay