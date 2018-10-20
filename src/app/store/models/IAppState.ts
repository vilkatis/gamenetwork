import { IAccountState } from './IAccountState';
import { IFeedState } from './IFeedState';
import { IInterfaceState } from './IInterfaceState';
import { ISessionsState } from './ISessionsState';
import { RouterReducerState } from '@ngrx/router-store/src/router_store_module';
import { IGamesState } from './IGamesState';

export interface IAppState {
  account: IAccountState;
  feed: IFeedState;
  interface: IInterfaceState;
  sessions: ISessionsState;
  games: IGamesState;
  router: RouterReducerState;
}
