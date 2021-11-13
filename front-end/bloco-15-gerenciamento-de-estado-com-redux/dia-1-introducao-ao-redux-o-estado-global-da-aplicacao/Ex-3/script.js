const INCREMENT_BTN = document.querySelector('#increment');
const DECREMENT_BTN = document.querySelector('#decrement');
const VALUE = document.querySelector('#value');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const INITIALSTATE = {
  counter: 0,
}

const reducer = (state = INITIALSTATE, action ) => {
  switch(action.type) {
    case INCREMENT : 
      return {
        counter: state.counter + 1
      }
    case DECREMENT : 
    return {
      counter: state.counter === 0 ? 0 : state.counter - 1
    }
    default : return state  
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

INCREMENT_BTN.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT })
})

DECREMENT_BTN.addEventListener('click', () => {
  store.dispatch({ type: DECREMENT })
})

store.subscribe(() => {
  const state = store.getState();
  VALUE.innerHTML = state.counter;
})
