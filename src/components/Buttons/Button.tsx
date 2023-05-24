type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  variant: string
  isLoading?: boolean;
}

const variants = {
  dark: 'bg-black text-white hover:bg-gray-900 text-white',
  special: 'bg-blue-600 hover:bg-blue-500 text-white',
  light: 'bg-white hover:bg-slate-100 text-gray-900'
}

function Button(props: ButtonProps) {
  const { children, onClick, variant, isLoading } = props
  let variantClasses = variants[variant];
  return (
    <button
      type="button"
      className={`flex rounded-lg px-4 py-3 text-md transition drop-shadow-lg ${variantClasses}  ${isLoading && 'bg-gray-400 cursor-not-allowed'}`}

      onClick={onClick}
    >
       {isLoading && (
        <svg
          className="animate-spin h-5 w-5 mx-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
          ></path>
        </svg>
      )}

      {children}
    </button>
  )
}

export { Button }
