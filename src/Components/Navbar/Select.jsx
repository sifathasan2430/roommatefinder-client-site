import React from 'react'
import { useId } from 'react'

const Select = React.forwardRef(({
  label = '',
  options = [],
  className = '',
  error = '',
  ...props
}, ref) => {
  const id = useId()

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          id={id}
          className={`
            w-full px-3 py-2 pr-8 text-sm transition-all
            rounded-lg border bg-white shadow-sm
            focus:outline-none  focus:border-[#ff9a68] 
            hover:border-amber-500
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}
            disabled:bg-gray-100 disabled:cursor-not-allowed
            appearance-none ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option style={{
             
            }}  key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  )
})



export default Select