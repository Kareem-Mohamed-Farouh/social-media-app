export interface IPosts {
  _id: string;
  body: string;
  image: string;
  user: User;
  createdAt: string;
  comments: Comment[];
  id: string;
}

interface RootObject {
  _id: string;
  content?: string;
  commentCreator: CommentCreator;
  post: string;
  createdAt: string;
  id: string;
}

interface CommentCreator {
  _id: string;
  name: string;
  photo: string;
}

export interface IUserData {
  message: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  photo: string;
  createdAt: string;
}

export interface iUserInfo {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  dateOfBirth: string;
  gender: string;
}
export interface IData {
  message: string;
  total: number;
  comments: Comment[];
}

interface CommentCreator {
  _id: string;
  name: string;
  photo: string;
}

export interface IComment {
  _id: string;
  content?: string;
  commentCreator: User;
  post: string;
  createdAt: string;
}

interface User {
  _id: string;
  name: string;
  photo: string;
}
