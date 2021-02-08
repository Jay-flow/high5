interface IconButtonProps {
  children: JSX.Element | JSX.Element[]
  title: string
  className: string
}

const IconButton: React.FC<IconButtonProps> = ({ children, title, className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {children}
      <span className="text-base">{title}</span>
    </div>
  )
}

export default IconButton
