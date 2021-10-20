export interface IAuthor {
  name: string;
  email: string;
  profile?: string;
  contact?: string;
  website?: string;
}

export interface IAuthorResponse {
  author: IAuthor;
}
