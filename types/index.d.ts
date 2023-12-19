export type ResponseBodyType = {
  method: string;
  accept_params: boolean;
  params: { [key: string]: string }[];
  accept_body: boolean;
  message: string;
  data: any;
};

export type Post = {
  postId: string;
  title: string;
  body: string;
  author: string;
  published: boolean
};
