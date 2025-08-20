import React from 'react'

interface NeumorphicSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string | number; label: string }[]
}

export const NeumorphicSelect: React.FC<NeumorphicSelectProps> = ({ 
  label, 
  error, 
  options,
  className = '', 
  ...props 
}) => {
  return (
    <div className="mb-6">
      <label className="block text-primary text-sm font-medium mb-2">
        {label}
      </label>
      <select
        className={`w-full px-4 py-3 rounded-2xl bg-neu-base shadow-neu-inset-sm 
          text-primary outline-none transition-all duration-300
          focus:shadow-neu-inset appearance-none cursor-pointer ${className}`}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-red-500 text-xs">{error}</p>
      )}
    </div>
  )
}
