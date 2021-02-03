import Link from "next/link"
import styled from "styled-components"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/components/navigation/navigation.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"

const StyledSwiper = styled(Swiper)`
  height: 40%;
`

const StyledImage = styled.img`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
`

SwiperCore.use([Autoplay])

const PictureContainer: React.FC = () => {
  const pictureUrl = [
    "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1284&q=80",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ]
  const pictures = pictureUrl.map((url) => (
    <SwiperSlide key={url}>
      <Link href={{ pathname: "/product/detail", query: { imageUrl: url } }}>
        <StyledImage src={url} />
      </Link>
    </SwiperSlide>
  ))
  return (
    <StyledSwiper spaceBetween={30} slidesPerView={3} autoplay={{ delay: 5000 }}>
      {pictures}
    </StyledSwiper>
  )
}

export default PictureContainer
