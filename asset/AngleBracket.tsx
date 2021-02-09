interface AngleBracketProps {
  type: "left" | "right"
  className?: string
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const AngleBracket: React.FC<AngleBracketProps> = ({ type, onClick, className }) => {
  return type == "left" ? (
    <svg
      className={`cursor-pointer ${className}`}
      width="12"
      onClick={onClick}
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11.115 2.115L9 0L0 9L9 18L11.115 15.885L4.245 9L11.115 2.115Z" fill="black" />
    </svg>
  ) : (
    <svg
      className={`cursor-pointer ${className}`}
      width="12"
      height="18"
      onClick={onClick}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.99977 0L0.884766 2.115L7.75477 9L0.884766 15.885L2.99977 18L11.9998 9L2.99977 0Z"
        fill="black"
      />
    </svg>
  )
}

export default AngleBracket
