import Input from './Input'

type FormFieldProps = {
  label: string
  type?: string // TODO: 타입 좁히기
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const FormField = ({ label, className, ...props }: FormFieldProps) => {
  return (
    <div className={`flex-1 min-w-0 ${className}`}>
      <Input label={label} {...props} />
    </div>
  )
}

export default FormField
