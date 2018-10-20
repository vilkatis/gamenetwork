import { Action } from '@ngrx/store';
import { IPost } from '../../models/IPost';

export const FEED_REQUEST = '[ACCOUNT] FEED REQUEST';
export const FEED_SUCCESS = '[ACCOUNT] FEED SUCCESS';
export const FEED_FAILURE = '[ACCOUNT] FEED FAILURE';

export class FeedRequest implements Action {
  readonly type = FEED_REQUEST;
}

export class FeedSuccess implements Action {
  readonly type = FEED_SUCCESS;

  constructor(public payload: Record<string, IPost>) {
  }
}

export class FeedFailure implements Action {
  readonly type = FEED_FAILURE;
}

export type FeedActions =
  | FeedRequest
  | FeedSuccess
  | FeedFailure;
