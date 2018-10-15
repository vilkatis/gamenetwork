import {State} from './state.model';
import {IAccount} from '../../models/IAccount';

export interface AccountState extends State {
  entity: IAccount;
}
