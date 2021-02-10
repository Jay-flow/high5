import SubTitle from "../components/SubTitle"
import Logo from "../asset/Logo"
import IconButton from "../components/IconButton"
import Youtube from "../asset/Youtube"
import Naver from "../asset/Naver"
import ImgNavigation from "../components/ImgNavigation"
import { useState } from "react"
import { useRouter } from "next/router"
import RankImageView from "../components/RankImageView"

const Product: React.FC = () => {
  const router = useRouter()
  const [productImageIndex, setIndex] = useState(0)

  const features = [
    "15.6형",
    "4K UHD (3840 x 2160) 16:9",
    "anti-glare display",
    "멀티스크린",
    "게임",
    "스트리밍",
    "디자인",
    "멀티태스크"
  ]

  const imageUrls = [
    "https://images.unsplash.com/photo-1612832164066-305667c23a01?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612831200752-a70d1d1bb83b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  ]

  const pageUp = () => {
    if (productImageIndex + 1 < imageUrls.length) {
      setIndex(productImageIndex + 1)
    }
  }

  const pageDown = () => {
    if (productImageIndex > 0) {
      setIndex(productImageIndex - 1)
    }
  }

  const redirectUrl = (url: string) => router.push(url)

  return (
    <div className="grid h-full grid-cols-2 px-20 py-28">
      <div className="p-10">
        <div className="mb-10">
          <SubTitle>Laptop/Gaming</SubTitle>
        </div>
        <h1 className="mb-10 text-2xl font-medium">
          ASUSROG 제피러스 듀오15
          <br />
          GX551QS-HB013T
        </h1>
        <div className="flex flex-wrap mb-16">
          {features.map((feature) => (
            <div key={feature} className="inline px-3 py-2 mb-2 mr-3 bg-gray-100">
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="mb-40">
          <IconButton
            className="mb-8"
            title="최저가 보기"
            onClick={() => redirectUrl("https://naver.com")}>
            <Logo />
          </IconButton>
          <IconButton
            className="mb-8"
            title="Youtube 영상 보기"
            onClick={() => redirectUrl("https://www.youtube.com/")}>
            <Youtube />
          </IconButton>
          <IconButton
            className="mb-8"
            title="네이버쇼핑 리뷰 보기"
            onClick={() => redirectUrl("https://shopping.naver.com/")}>
            <Naver />
          </IconButton>
        </div>
        <div className="flex justify-start">
          <ImgNavigation
            className="w-32"
            pageUp={pageUp}
            pageDown={pageDown}
            imageUrlLength={5}
            productImageIndex={productImageIndex}
          />
        </div>
      </div>
      <div className="h-full p-10">
        <RankImageView
          pageDown={pageDown}
          pageUp={pageUp}
          imageUrls={imageUrls}
          productImageIndex={productImageIndex}
        />
      </div>
    </div>
  )
}

export default Product
