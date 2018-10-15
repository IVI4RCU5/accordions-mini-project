import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import AccordionDisplay from './components/containers/AccordionDisplay.jsx'
import AccordionForm from './components/containers/AccordionForm.jsx'
import accordions from './reducers/accordions.js'

const rootReducer = combineReducers({accordions})

const store = createStore(rootReducer)

const App = () => {
  return (
    <div>
      <AccordionDisplay />
      <AccordionForm />
    </div>
  )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));