export interface ISession {
  id?: number;
  title: string;
  date: string;
  time: string;
  platform: string;
  language: string;
  region: string;
  gameName: string;
  users: {avatar: string}[];
}
