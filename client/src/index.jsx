import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordions: [{
        open: false,
        header: 'Accordion 1',
        text: 'Text for accordion one'
      }, {
        open: false, 
        header: 'Accordion 2',
        text: 'Text for accordion two'
      }, {
        open: false,
        header: 'Accordion 3',
        text: 'Text for accordion three'
      }, {
        open: false, 
        header: 'Accordion 4',
        text: 'Text for accordion four'
      }, {
        open: false,
        header: 'Accordion 5',
        text: 'Text for accordion five'
      }]
    }
    
    this.toggleOpen=this.toggleOpen.bind(this)
  }

  toggleOpen(value) {
    this.setState({
      accordions: this.state.accordions.map((accordion, index) => {
        if (accordion.open && index !== value) {
          accordion.open = false
        } else if (index === value) {
          accordion.open = !accordion.open
        }
        return accordion
      })
    })
  }

  render () {
    return (
      <div>
        {this.state.accordions.map((accordion, index) => {
          return <Accordion open={accordion.open} header={accordion.header} text={accordion.text} key={index} value={index} handleClick={this.toggleOpen}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));