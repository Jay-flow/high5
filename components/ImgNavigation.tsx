import AngleBracket from "../asset/AngleBracket"

interface ImgNavigationProps {
  className?: string
}

const ImgNavigation: React.FC<ImgNavigationProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-between w-32 text-base font-medium ${className}`}>
      <AngleBracket type="left" />
      <span>1</span>
      <span className="text-gray-400">/</span>
      <span className="text-gray-400">5</span>
      <AngleBracket type="right" />
    </div>
  )
}

export default ImgNavigation
