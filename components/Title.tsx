interface TitleProps {
  children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  className?: string
  style?: React.CSSProperties
}

const Title: React.FC<TitleProps> = ({ children, className, style }) => {
  return (
    <h1 className={`text-5xl font-bold ${className}`} style={{ ...style, letterSpacing: "-1px" }}>
      {children}
    </h1>
  )
}

export default Title
