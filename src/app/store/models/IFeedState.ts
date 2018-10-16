import { IState } from './IState';
import { IPost } from '../../models/post.model';

export interface IFeedState extends IState {
  entities: Record<string, IPost>;
}
