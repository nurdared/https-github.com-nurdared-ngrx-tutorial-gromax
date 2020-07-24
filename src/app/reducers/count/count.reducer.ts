import { CountActions, countActionsType } from './count.actions';

export const COUNT_NODE = 'count';

export interface ICountState {
  count: number;
  updatedAt: number;
}

const initialState: ICountState = {
  count: 0,
  updatedAt: Date.now(),
};

export const countReducer = (state = initialState, actions: CountActions) => {
  switch (actions.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1,
      };
    case countActionsType.decrease:
      return {
        ...state,
        count: state.count - 1,
      };
    case countActionsType.clear:
      return {
        ...state,
        count: 0,
      };
    case countActionsType.updatedAt:
      return {
        ...state,
        updatedAt: actions.payload.updatedAt,
      };
    default:
      return state;
  }
};
