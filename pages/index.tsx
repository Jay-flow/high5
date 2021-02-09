import Link from "next/link"

export default function Home(): JSX.Element {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="grid h-full grid-cols-2">
        <div className="flex justify-center h-full">
          <div className="flex flex-col justify-center h-full space-y-12">
            <h1 className="flex items-center text-xl">
              <span className="mr-1 font-bold font-roboto" style={{ letterSpacing: "8px" }}>
                high5
              </span>
              <span>
                <svg
                  className="w-9 h-9"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.405 9.00002C20.58 10.425 21.075 12.27 22.5 13.095C23.925 13.92 25.77 13.425 26.595 12C27.42 10.575 26.925 8.73002 25.5 7.90502C24.075 7.08002 22.23 7.57502 21.405 9.00002Z"
                    className="fill-current"
                  />
                  <path
                    d="M23.76 15.615C23.76 15.615 21.315 14.205 19.86 13.365C16.29 11.295 15.06 6.70501 17.13 3.13501L14.535 1.63501C12.15 5.74501 12.9 10.815 15.99 14.1L8.26501 27.48L10.86 28.98L13.11 25.08L15.705 26.58L11.205 34.38L13.8 35.88L23.235 19.545C24.945 21.87 25.23 25.08 23.7 27.735L26.295 29.235C28.695 25.11 28.215 19.365 23.76 15.615Z"
                    className="fill-current"
                  />
                </svg>
              </span>
            </h1>
            <h2
              className="text-5xl font-bold"
              style={{ lineHeight: "68px", letterSpacing: "-1px" }}>
              실패하지 않는
              <br />
              프리미엄 쇼핑
            </h2>
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
      <div className="flex flex-col justify-center h-full px-16 space-y-16">
        <span className="text-xl font-bold font-roboto" style={{ letterSpacing: "8px" }}>
          하이파이브 큐레이션
        </span>
        <h1 className="text-5xl font-bold" style={{ letterSpacing: "-1px" }}>
          추천상품
        </h1>
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
