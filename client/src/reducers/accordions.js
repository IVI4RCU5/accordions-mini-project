const initialState = [
  {
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
  }
]

const accordions = (state = initialState, action) => {
  if (action.type === 'TOGGLE_OPEN') {
    return state.map((accordion, index) => {
      if (accordion.open && index !== action.target) {
        accordion.open = false
      } else if (index === action.target) {
        accordion.open = !accordion.open
      }
      return accordion
    })
  } else if (action.type === 'ADD_ACCORDION') {
    return [...state, { open: false, header: action.header, text: action.text }]
  } else {
    return state
  }
}

export default accordions