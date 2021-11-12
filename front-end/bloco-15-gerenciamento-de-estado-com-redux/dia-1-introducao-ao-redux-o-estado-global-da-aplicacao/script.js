const NextBtn = document.querySelector('#next');
const PreviousBtn = document.querySelector('#previous');
const RandomBtn = document.querySelector('#random');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const PREVIUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  console.log(state)
  switch (action.type) {
    case PREVIUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? 0 : state.index - 1,
      };
    case NEXT_COLOR:
    return {
        ...state,
        index: state.index === state.colors.length - 1 ? state.colors.length - 1: state.index + 1,
      };
      case RANDOM_COLOR: 
        return {
          ...state,
          colors: [...state.colors, criarCor()],
          index: state.colors.length,
        };
    default: return state;
  }
}

PreviousBtn.addEventListener('click', () => {
  store.dispatch({ type: PREVIUS_COLOR })
})

NextBtn.addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR })
})

RandomBtn.addEventListener('click', () => {
  store.dispatch({ type: RANDOM_COLOR })
})

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  const state = store.getState()
  document.querySelector('#value').innerHTML = state.colors[state.index];
  document.getElementById('container').style.backgroundColor = state.colors[state.index];
})
