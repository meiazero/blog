export type ResponseBodyType = {
  method: string,
  "accept_params": boolean,
  params: { [key: string]: string }[],
  "accept_body": boolean,
  message: string,
}
