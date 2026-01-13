import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps) => (
  <div
    className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border p-6 shadow-sm mb-8 ${className}`}
  >
    {children}
  </div>
)

const Header = ({ children, className = '' }: CardProps) => (
  <div className={`flex flex-row items-center justify-between space-y-0 pb-2 ${className}`}>{children}</div>
)

const Title = ({ children, className = '' }: CardProps) => (
  <h3 className={`leading-none font-semibold text-xl ${className}`}>{children}</h3>
)

const Description = ({ children, className = '' }: CardProps) => (
  <p className={`text-muted-foreground text-sm mt-1.5 ${className}`}>{children}</p>
)

const Content = ({ children, className = '' }: CardProps) => <div className={`pt-2 ${className}`}>{children}</div>

Card.Header = Header
Card.Title = Title
Card.Description = Description
Card.Content = Content

export default Card
