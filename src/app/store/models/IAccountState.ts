import {IState} from './IState';
import {IAccount} from '../../models/IAccount';

export interface IAccountState extends IState {
  entity: IAccount;
}
