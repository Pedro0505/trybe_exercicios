const FIRST_TEXT_NAME = document.querySelector('#nome-1');
const FIRST_TEXT_LAST_NAME = document.querySelector('#sobrenome-1');
const SECOND_TEXT_NAME = document.querySelector('#nome-2');
const SECOND_TEXT_LAST_NAME = document.querySelector('#sobrenome-2');

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
const CHANGE_SECOND_NAME = 'CHANGE_SECOND_NAME';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME :
      return {
        ...state,
        nome: action.name,
        sobrenome: action.sobrenome,
      }
    default :
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_SECOND_NAME :
      return {
        ...state,
        nome: action.name,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const mergeReducers = Redux.combineReducers({
meuPrimeiroReducer,
meuSegundoReducer,
});

const store = Redux.createStore(mergeReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.onload = () => {
  setTimeout(() => {
    store.dispatch({ type: CHANGE_FIRST_NAME, name: 'Bruna', sobrenome: 'Santana Oliveira' })
    store.dispatch({ type: CHANGE_SECOND_NAME, name: 'Rodrigo', sobrenome: 'Santos da Silva', })
  }, 3000);
};

store.subscribe(() => {
  const state = store.getState();
  FIRST_TEXT_NAME.innerHTML = state.meuPrimeiroReducer.nome
  FIRST_TEXT_LAST_NAME.innerHTML = state.meuPrimeiroReducer.sobrenome

  SECOND_TEXT_NAME.innerHTML = state.meuSegundoReducer.nome
  SECOND_TEXT_LAST_NAME.innerHTML = state.meuSegundoReducer.sobrenome
})

