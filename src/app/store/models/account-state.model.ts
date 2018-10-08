import {State} from './state.model';
import {User} from '../../models/user.model';

export interface AccountState extends State {
  entity: User;
}
