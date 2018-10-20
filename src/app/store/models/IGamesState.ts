import { IState } from './IState';
import { IGame } from '../../models/IGame';

export interface IGamesState extends IState {
  entities: Record<string, IGame>;
}
