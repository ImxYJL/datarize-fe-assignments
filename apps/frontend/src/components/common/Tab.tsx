type TabProps = {
  children: React.ReactNode
}

export const Tab = ({ children }: TabProps) => (
  <section className="flex p-1 bg-muted rounded-lg w-fit border border-border">{children}</section>
)

type TabItemProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

const TabItem = ({ label, isActive, onClick }: TabItemProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      px-4 py-1.5 text-sm font-medium rounded-md transition-all
      ${
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
      }
    `}
  >
    {label}
  </button>
)

Tab.TabItem = TabItem
