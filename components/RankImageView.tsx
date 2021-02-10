import AngleBracket from "../asset/AngleBracket"
import Dot from "../asset/Dot"

interface RankImageViewProps {
  imageUrls: string[]
  productImageIndex: number
  pageDown: () => void
  pageUp: () => void
}

const RankImageView: React.FC<RankImageViewProps> = ({
  imageUrls,
  productImageIndex,
  pageDown,
  pageUp
}) => {
  const dots = () => {
    return imageUrls.map((url, selectIndex) => {
      return (
        <Dot
          key={url}
          className={`mr-3 ${productImageIndex == selectIndex ? "bg-red-600" : "bg-gray-100"}`}
        />
      )
    })
  }

  return (
    <div
      className="relative h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${imageUrls[productImageIndex]})`
      }}>
      <div className="absolute bottom-0 left-0 flex flex-col justify-between w-full h-full">
        <div className="flex flex-col items-center justify-center w-24 h-24 text-xl text-white bg-red-600 font-roboto">
          <span>Rank</span>
          <span>1</span>
        </div>
        <div className="flex justify-between">
          <button
            className={`w-12 bg-white h-14 flex justify-center items-center ${
              productImageIndex == 0 ? "invisible" : "visible"
            }`}
            onClick={pageDown}>
            <AngleBracket type="left" />
          </button>
          <button
            className={`w-12 bg-white border-none h-14 flex justify-center items-center ${
              productImageIndex + 1 == imageUrls.length ? "invisible" : "visible"
            }`}
            onClick={pageUp}>
            <AngleBracket type="right" />
          </button>
        </div>
        <div className="flex justify-center w-full mb-12">{dots()}</div>
      </div>
    </div>
  )
}

export default RankImageView
