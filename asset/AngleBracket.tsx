interface AngleBracketProps {
  type: "left" | "right"
  className?: string
  bold?: boolean
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const AngleBracket: React.FC<AngleBracketProps> = ({ type, onClick, className, bold }) => {
  const angleBrackegComponent = (): JSX.Element => {
    if (!bold) {
      return (
        <svg
          className={`cursor-pointer ${className}`}
          width="12"
          height="22"
          onClick={onClick}
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {type == "left" ? (
            <path d="M11 1L1 11L11 21" stroke="#111827" />
          ) : (
            <path d="M1 1L11 11L1 21" stroke="#111827" />
          )}
        </svg>
      )
    } else {
      return (
        <svg
          className={`cursor-pointer ${className}`}
          width="12"
          onClick={onClick}
          height="18"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {type == "left" ? (
            <path d="M11.115 2.115L9 0L0 9L9 18L11.115 15.885L4.245 9L11.115 2.115Z" fill="black" />
          ) : (
            <path
              d="M2.99977 0L0.884766 2.115L7.75477 9L0.884766 15.885L2.99977 18L11.9998 9L2.99977 0Z"
              fill="black"
            />
          )}
        </svg>
      )
    }
  }

  return angleBrackegComponent()
}

AngleBracket.defaultProps = {
  bold: false
}

export default AngleBracket
