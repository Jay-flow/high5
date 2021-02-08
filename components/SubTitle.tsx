interface SubTitleProps {
  children: JSX.Element | JSX.Element[] | string
  style?: React.CSSProperties
  className?: string
}

const SubTitle: React.FC<SubTitleProps> = ({ children, style, className }) => {
  console.log(className)
  return (
    <span
      className={`text-xl font-light tracking-wider font-roboto ${className}`}
      style={{ ...style, letterSpacing: "8px" }}>
      {children}
    </span>
  )
}

export default SubTitle
