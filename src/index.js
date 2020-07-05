import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Window from './components/Window';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  clues: [],
  locations: [],
  persons: [],
  suspects: [],
  facts: [] 
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CLUE':
      return {
        ...state,
        clues: state.clues.concat(action.payload.clue)
      }
    case 'ADD_LOCATION':
      return {
        ...state,
        locations: state.locations.concat(action.payload.location)
      }
    case 'UPDATE_CLUE':
      return {
        ...state,
        clues: state.clues.filter(clues => clues !== "Locate missing earring").concat(action.payload.clue)
      }
    case 'ADD_POI':
      return {
        ...state,
        persons: state.persons.concat(action.payload.persons)
      }
     case 'ADD_SUSPECT':
      return {
        ...state,
        suspects: state.suspects.concat(action.payload.suspects)
      } 
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <Window />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
