interface DotProps {
  className?: string
}

const Dot: React.FC<DotProps> = ({ className }) => {
  return <span className={`inline-block w-3 h-3 rounded-full ${className}`}></span>
}

export default Dot
