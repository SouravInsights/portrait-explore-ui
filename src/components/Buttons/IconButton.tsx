import React from "react";

type IconButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  variant: string
}

const variants = {
  dark: 'bg-black text-white text-white',
  transparent: 'bg-black opacity-50 text-white',
  light: 'bg-white text-gray-900'
}

function IconButton(props: IconButtonProps) {
  const { children, onClick, variant } = props
  let variantClasses = variants[variant];
  return (
    <button
      type="button"
      className={`flex rounded-lg px-2 py-2 text-md transition drop-shadow-lg ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { IconButton }
