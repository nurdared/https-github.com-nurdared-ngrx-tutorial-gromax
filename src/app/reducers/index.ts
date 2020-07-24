import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ICountState, countReducer, COUNT_NODE } from './count/count.reducer';

export interface State {
  [COUNT_NODE]: ICountState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNT_NODE]: countReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
