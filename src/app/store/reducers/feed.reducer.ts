import * as fromFeed from '../actions/feed.actions';
import { IFeedState } from '../models/IFeedState';
import { Selector } from '@ngrx/store';
import { IPost } from '../../models/post.model';

const initialState: IFeedState = {
  entities: null,
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: fromFeed.FeedActions): IFeedState {
  switch (action.type) {
    case (fromFeed.FEED_REQUEST):
      return {
        ...state,
        isLoading: true
      };
    case (fromFeed.FEED_SUCCESS):
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
        isLoaded: true
      };
    case (fromFeed.FEED_FAILURE):
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}

export const getFeedEntities: Selector<IFeedState, Record<string, IPost>> = (state: IFeedState) => state.entities;
export const getFeedLoading: Selector<IFeedState, boolean> = (state: IFeedState) => state.isLoading;
export const getFeedLoaded: Selector<IFeedState, boolean> = (state: IFeedState) => state.isLoaded;
