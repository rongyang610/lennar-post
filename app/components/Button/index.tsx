import { ButtonProps } from './types'

export default function Button({
  classNames = '',
  text,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`w-full rounded-md bg-indigo-500 px-4 py-3 text-white md:w-fit ${classNames}`}
      type={type}
    >
      {text}
    </button>
  )
}
