import {IAccountState} from './IAccountState';
import { IFeedState } from './IFeedState';
import { IInterfaceState } from './IInterfaceState';

export interface IAppState {
  account: IAccountState;
  feed: IFeedState;
  interface: IInterfaceState;
}
