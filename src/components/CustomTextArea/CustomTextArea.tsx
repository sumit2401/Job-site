import React, { TextareaHTMLAttributes, forwardRef } from 'react'


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string 
}

export const CustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={`w-full px-4 py-2 bg-white/80 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all resize-none ${
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

CustomTextarea.displayName = 'Textarea'

