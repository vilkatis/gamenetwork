export interface IPost {
  user: {
    username: string;
    avatar: string;
  };
  activity: {
    name: string;
    action: string;
  };
  text: string;
  image: string;
}
