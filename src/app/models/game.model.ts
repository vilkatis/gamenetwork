export interface IGame {
  platform: string;
  region: string;
  language: string;
  title: string;
  gameName: string;
  users: {avatar: string}[];
}
