import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'ghost' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

const Button = ({
  children,
  type = 'button',
  variant = 'outline',
  size = 'sm',
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const VARIANT = {
    primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all',
    outline: 'border border-border/80 bg-white text-foreground hover:bg-muted hover:border-border transition-colors',
    ghost: 'text-muted-foreground hover:bg-muted hover:text-foreground transition-colors',
  }

  const SIZE = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-base',
  }

  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors 
        outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none
        focus-visible:border-foreground/50
        
        disabled:pointer-events-none disabled:opacity-40 disabled:grayscale
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
