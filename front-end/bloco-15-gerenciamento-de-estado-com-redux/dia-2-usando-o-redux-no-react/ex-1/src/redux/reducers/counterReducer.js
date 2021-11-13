const INITIAL_STATE = {
  counter: 0,
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENT: 
      return {
      counter: state.counter + 1,
    }
    case DECREMENT:
      return {
        counter: state.counter === 0 ? 0 : state.counter - 1,
      }
    default : return state;
  }
}
