import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromFeed from '../reducers/feed.reducer';
import { IAppState } from '../models/IAppState';
import { IFeedState } from '../models/IFeedState';
import { IPost } from '../../models/post.model';

export const getFeedState: MemoizedSelector<IAppState, IFeedState> = createFeatureSelector<IAppState, IFeedState>('feed');

export const getFeedEntities: MemoizedSelector<IAppState, Record<string, IPost>> = createSelector(
  getFeedState,
  fromFeed.getFeedEntities
);

export const getAllFeed: MemoizedSelector<IAppState, IPost[]> = createSelector(
  getFeedEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getFeedLoaded: MemoizedSelector<IAppState, boolean> = createSelector(
  getFeedState,
  fromFeed.getFeedLoaded
);

export const getFeedLoading: MemoizedSelector<IAppState, boolean> = createSelector(
  getFeedState,
  fromFeed.getFeedLoading
);
