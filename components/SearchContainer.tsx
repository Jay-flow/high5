import { useState } from "react"
import Link from "next/link"

interface searchClickProps {
  searchClick: boolean
}

const SearchContainer = (): JSX.Element => {
  const [searchClick, setSearchClick] = useState(false)
  const onSearch = (value: string) => console.log(value)
  const onFocus = () => setSearchClick(true)
  const onBlur = () => setSearchClick(false)
  const categories = [
    "디지털/가전/휴대폰",
    "디지털/가전/노트북",
    "디지털/가전/PC",
    "디지털/가전/모니터",
    "디지털/가전/저장장치",
    "패션의류",
    "패션잡화",
    "화장품/미용"
  ]
  const categoryElements = categories.map((category: string) => {
    return (
      <Link key={category} href="https://naver.com">
        <StyeldCategory>
          <span>{category}</span>
        </StyeldCategory>
      </Link>
    )
  })

  return (
    <Container>
      <StyledSearch
        style={{ marginBottom: searchClick ? "0px" : "100px" }}
        placeholder="제품 찾기"
        allowClear
        onSearch={onSearch}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <StyeldCategoryContainer searchClick={searchClick}>
        <StyeldCategories>{categoryElements}</StyeldCategories>
      </StyeldCategoryContainer>
    </Container>
  )
}

export default SearchContainer
