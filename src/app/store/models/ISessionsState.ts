import { IState } from './IState';
import { ISession } from '../../models/ISession';

export interface ISessionsState extends IState {
  entities: Record<string, ISession>;
}
