export const INITIAL_EMAIL_MESSAGE_STATUS_STATE = {
  isError: false,
  isSuccess: false,
  text: '',
}

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
