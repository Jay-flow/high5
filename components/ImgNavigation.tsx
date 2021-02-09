import AngleBracket from "../asset/AngleBracket"

interface ImgNavigationProps {
  className?: string
  imageUrlLength: number
  pageUp: () => void
  pageDown: () => void
  index: number
}

const ImgNavigation: React.FC<ImgNavigationProps> = ({
  className,
  imageUrlLength,
  pageDown,
  pageUp,
  index
}) => {
  const reIndex = index + 1
  return (
    <div className={`flex items-center justify-between w-32 text-base font-medium ${className}`}>
      <AngleBracket
        bold={true}
        type="left"
        onClick={pageDown}
        className={reIndex == 1 ? "invisible" : "visible"}
      />
      <div className="flex justify-around w-3/5 select-none">
        <span>{reIndex}</span>
        <span className="text-gray-400 select-none">/</span>
        <span className="text-gray-400">{imageUrlLength}</span>
      </div>
      <AngleBracket
        bold={true}
        type="right"
        onClick={pageUp}
        className={reIndex == imageUrlLength ? "invisible" : "visible"}
      />
    </div>
  )
}

export default ImgNavigation
