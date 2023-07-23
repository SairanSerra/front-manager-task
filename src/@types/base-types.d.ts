export type DefaultResponse = {
  statusCode: number
  message: string
}

export type DefaultResponseWithContent<IContent> = DefaultResponse & {
  content: IContent
}

export type TypeStatusTask = 'PENDING' | 'INPROGRESS' | 'COMPLETED'
