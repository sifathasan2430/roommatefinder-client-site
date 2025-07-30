import React from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
         className={`
            w-full h-10 px-3 py-2 text-sm rounded-md border 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-900 
            text-gray-900 dark:text-gray-100 
            placeholder-gray-400 dark:placeholder-gray-500 
            focus:outline-none 
            focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
