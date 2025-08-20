import React from 'react'

interface NeumorphicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const NeumorphicInput: React.FC<NeumorphicInputProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="mb-6">
      <label className="block text-primary text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3 rounded-2xl bg-neu-base shadow-neu-inset-sm 
          text-primary placeholder-neu-dark/50 outline-none transition-all duration-300
          focus:shadow-neu-inset ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-red-500 text-xs">{error}</p>
      )}
    </div>
  )
}
