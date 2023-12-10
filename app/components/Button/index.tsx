import { ButtonProps } from './types'

export default function Button({
  classNames = '',
  text,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`w-full sm:w-fit px-4 py-3 rounded-md bg-[#6366F1] text-white ${classNames}`}
      type={type}
    >
      {text}
    </button>
  )
}
