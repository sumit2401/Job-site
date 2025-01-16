import React, { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string 
}

export const CustomTextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={`w-full px-4 py-2 bg-white/80 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all ${
            error ? 'border-red-500' : ''
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

CustomTextField.displayName = 'Input'

