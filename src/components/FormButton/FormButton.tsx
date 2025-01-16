import React, { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const FormButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

FormButton.displayName = 'Button'

