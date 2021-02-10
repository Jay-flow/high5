import Link from "next/link"
import Logo from "../asset/Logo"
import Title from "../components/Title"

export default function Home(): JSX.Element {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="grid grid-cols-2 h-5/7">
        <div className="flex justify-center h-full">
          <div className="flex flex-col justify-center h-full space-y-12">
            <h1 className="flex items-center text-xl">
              <span className="mr-1 font-bold font-roboto" style={{ letterSpacing: "8px" }}>
                high5
              </span>
              <span>
                <Logo />
              </span>
            </h1>
            <Title className="leading-21">
              실패하지 않는
              <br />
              프리미엄 쇼핑
            </Title>
            <span className="text-xl font-medium">
              무조건 최고 5개만 알려드림
              <br />잘 모르겠으면 그냥 이거 보고 사세요
            </span>
            <Link href="/search">
              <div
                style={{ width: "505px", height: "68px" }}
                className="flex items-center pl-3 bg-gray-900 cursor-pointer">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.25 21H22.065L21.645 20.595C23.115 18.885 24 16.665 24 14.25C24 8.865 19.635 4.5 14.25 4.5C8.865 4.5 4.5 8.865 4.5 14.25C4.5 19.635 8.865 24 14.25 24C16.665 24 18.885 23.115 20.595 21.645L21 22.065V23.25L28.5 30.735L30.735 28.5L23.25 21ZM14.25 21C10.515 21 7.5 17.985 7.5 14.25C7.5 10.515 10.515 7.5 14.25 7.5C17.985 7.5 21 10.515 21 14.25C21 17.985 17.985 21 14.25 21Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1525981045450-60e3d2ca0b8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)"
          }}></div>
      </div>
      <div className="flex flex-col justify-center h-full px-16 space-y-16 bg-gray-100">
        <span className="text-xl font-bold font-roboto" style={{ letterSpacing: "8px" }}>
          하이파이브 큐레이션
        </span>
        <Title>추천상품</Title>
        <div className="flex space-x-5 text-2xl font-light leading-9">
          <Link href="/product">
            <div className="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1525981045450-60e3d2ca0b8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                alt="image_alt"
                className="object-cover object-center mb-5"
              />
              <span>
                실패하지 않는
                <br />
                남자 선물
              </span>
            </div>
          </Link>
          <Link href="/product">
            <div className="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1525981045450-60e3d2ca0b8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                alt="image_alt"
                className="object-cover object-center mb-5"
              />
              <span>
                실패하지 않는
                <br />
                남자 선물
              </span>
            </div>
          </Link>
          <Link href="/product">
            <div className="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1525981045450-60e3d2ca0b8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                alt="image_alt"
                className="object-cover object-center mb-5"
              />
              <span>
                실패하지 않는
                <br />
                남자 선물
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
