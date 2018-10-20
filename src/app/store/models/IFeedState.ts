import { IState } from './IState';
import { IPost } from '../../models/IPost';

export interface IFeedState extends IState {
  entities: Record<string, IPost>;
}
