import { IUser } from './IUser';

export interface IAccount extends IUser {
  username: string;
  avatar: string;
  firstName: string;
  lastName: string;
  friends: IUser[];
}
