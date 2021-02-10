import Link from "next/link"
import { useRouter } from "next/router"

const Search: React.FC = () => {
  const router = useRouter()
  const searchMenus = [
    "전자제품>Laptop>Gaming",
    "전자제품>키보드>기계식",
    "전자제품>키보드>무선마우스",
    "전자제품>키보드>유선마우스",
    "전자제품>키보드>24인치",
    "전자제품>키보드>27인치"
  ]
  const searchMenuComponents = searchMenus.map((menu) => (
    <Link key={menu} href="/product">
      <span className="mb-10 text-4xl font-light leading-9.5">{menu}</span>
    </Link>
  ))

  return (
    <div className="flex flex-col justify-center h-full p-40 text-white bg-gray-900 cursor-pointer">
      <button onClick={() => router.back()}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="mb-32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 14H7.66L18.84 2.82L16 0L0 16L16 32L18.82 29.18L7.66 18H32V14Z"
            fill="white"
          />
        </svg>
      </button>
      {searchMenuComponents}
    </div>
  )
}

export default Search
