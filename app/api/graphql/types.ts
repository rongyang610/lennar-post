export type CreateUserResponse = {
  email: string
  id: string
}

export type CreateUserInput = {
  input: {
    email: string
    name: string
    username: string
  }
}
