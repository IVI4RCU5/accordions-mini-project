import React from 'react';
import { connect } from 'react-redux';

const addAccordion = (header, text) => ({type: 'ADD_ACCORDION', header, text})

class AccordionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '',
      text: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.dispatch(addAccordion(this.state.header, this.state.text))
        }}>
          <h4>Header:</h4>
          <input class="header-input" type="text" value={this.state.header} onChange={(event) => this.setState({header: event.target.value})}/>
          <h4>Body:</h4>
          <input class="body-input" type="text" value={this.state.text} onChange={(event) => this.setState({text: event.target.value})}/>
          <button class="submit-button" type="submit">Add Accordion</button>
        </form>
      </div>
    )
  }
}

export default connect()(AccordionForm)