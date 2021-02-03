import { Layout } from "antd"
import styled from "styled-components"
const StyledHeader = styled(Layout.Header)`
  display: flex;
  background-color: white;
`

const SubTitle = styled.span`
  margin-left: 15px;
`

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <h1>Top5</h1>
      <SubTitle>최고의 제품만을 찾아드립니다.</SubTitle>
    </StyledHeader>
  )
}

export default Header
