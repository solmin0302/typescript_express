export interface IUser {
  _id: number;
  nickname: string;
  userId: string;
  password: string;
  createdAt: Date;
}

export interface IUserInputDTO {
  nickname: string;
  userId: string;
  password: string;
}
