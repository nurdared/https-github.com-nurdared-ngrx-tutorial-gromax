import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNT_NODE, ICountState } from './count.reducer';

export const selectCountFeature = createFeatureSelector<ICountState>(
  COUNT_NODE
);

export const selectCount = createSelector(
  selectCountFeature,
  (state: ICountState): number => state.count
);

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: ICountState): number => state.updatedAt
);
