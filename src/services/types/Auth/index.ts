interface User {
  id: number
  name: string
  email: string
  phone: number
  createdAt: string
}

interface Token {
  type: string
  token: string
  expires_at: string
}
export interface ContentIResponseLogin {
  user: User
  token: Token
}

export interface IRequestLogin {
  email: string
  password: string
}

export interface DataUser {
  name: string
  email: string
  phone: number
  token: string
}

export interface IRequestCreateUser {
  name: string
  email: string
  phone: string
  password: string
}
