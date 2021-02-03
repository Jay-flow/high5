import { Input } from "antd"
import styled from "styled-components"
import { useState } from "react"
import Link from "next/link"

interface searchClickProps {
  searchClick: boolean
}

const { Search } = Input
const Container = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
`
const StyledSearch = styled(Search)`
  /* margin-bottom: ${(props) => (props.searchClick ? "0px" : "100px")}; */
  max-width: 580px;
`

const StyeldCategoryContainer = styled.div<searchClickProps>`
  overflow: hidden;
  display: ${(props) => (props.searchClick ? "initial" : "none")};
  height: 100%;
  width: 100%;
  max-width: 580px;
  padding-top: 10px;
  padding-bottom: 30px;
`

const StyeldCategories = styled.div`
  /* overflow-y: scroll; */
  overflow: auto;
  padding: 5px 10px;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  background-color: white;
`
const StyeldCategory = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #f0f2f5;
  padding-bottom: 3px;
  margin-bottom: 5px;
`

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
