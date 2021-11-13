import { INCREMENT, DECREMENT } from '../reducers/counterReducer';

export const INCREMENT_ACT = (state) => ({ type: INCREMENT, state });
export const DECREMENT_ACT = (state) => ({ type: DECREMENT, state });
