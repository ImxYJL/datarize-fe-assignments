import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'ghost' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

const Button = ({ children, variant = 'outline', size = 'sm', icon, className = '', ...props }: ButtonProps) => {
  const VARIANT = {
    primary: 'bg-primary text-primary-foreground shadow enabled:hover:bg-primary/90',
    outline: 'border border-border bg-background shadow-sm enabled:hover:bg-muted enabled:hover:text-foreground',
    ghost: 'enabled:hover:bg-muted enabled:hover:text-foreground',
  }

  const SIZE = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-base',
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors 
        outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none
        focus-visible:border-foreground/50
        
        disabled:pointer-events-none disabled:opacity-50 gap-2
        ${VARIANT[variant]} 
        ${SIZE[size]} 
        ${className}
      `}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
