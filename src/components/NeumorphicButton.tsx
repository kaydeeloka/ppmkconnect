import React from 'react'

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ 
  children, 
  variant = 'primary', 
  loading = false,
  className = '', 
  disabled,
  ...props 
}) => {
  const baseClasses = `px-8 py-3 rounded-2xl font-medium transition-all duration-300 
    transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`
  
  const variantClasses = variant === 'primary' 
    ? 'bg-primary text-white shadow-neu-outset-sm hover:shadow-neu-outset active:shadow-neu-inset-sm'
    : 'bg-neu-base text-primary shadow-neu-outset-sm hover:shadow-neu-outset active:shadow-neu-inset-sm'

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  )
}
