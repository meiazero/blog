export type ResponseBodyType = {
  method: string;
  accept_params: boolean;
  params: { [key: string]: string }[];
  accept_body: boolean;
  message: string;
  data: any;
};

export type Post = {
  id?: number;
  postId: string;
  title: string;
  body: string;
  banner?: string;
  author: string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type NavItem = {
  name: string;
  path: string;
};
