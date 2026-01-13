import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

const Input = ({ label, className = '', id, ...props }: InputProps) => {
  return (
    <div className="flex-1 min-w-0">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground block mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          className={`
            flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors 
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
            disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  )
}

export default Input
