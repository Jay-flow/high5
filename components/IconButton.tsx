interface IconButtonProps {
  children: JSX.Element | JSX.Element[]
  title: string
  className: string
  onClick: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ children, title, className, onClick }) => {
  return (
    <button className={`flex items-center space-x-4 ${className}`} onClick={onClick}>
      {children}
      <span className="text-base">{title}</span>
    </button>
  )
}

export default IconButton
