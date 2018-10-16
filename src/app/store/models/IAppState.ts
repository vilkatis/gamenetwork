import {IAccountState} from './IAccountState';
import { IFeedState } from './IFeedState';

export interface IAppState {
  account: IAccountState;
  feed: IFeedState;
}
