type ChipProps = {
  label?: string
  variant: string
}

type VariantsProps = {
  dark: string
  special: string
  light: string
}

const variants: VariantsProps = {
  dark: 'bg-black text-white hover:bg-gray-900 text-white',
  special: 'bg-blue-600 hover:bg-blue-500 text-white',
  light: 'bg-white hover:bg-slate-100 text-gray-900'
}

export const Chip = (props: ChipProps) => {
  const { label, variant } = props;
  let variantClasses = variants[variant];
  return (
    <button className={`rounded-lg shadow-xl py-1 px-2 text-xs font-semibold not-italic ${variantClasses}`}>
      {variant === 'dark' ? 'Featured' : variant === 'special' ? 'Staff Pick' : `${label}`}
    </button>
  )
}