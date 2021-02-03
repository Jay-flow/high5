import { Layout } from "antd"
import styled from "styled-components"
import Header from "../components/Header"
const { Content, Footer } = Layout
const StyledLayout = styled(Layout)`
  height: 100%;
`

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>Gmeasying ©2021 Created by Jay-flow</Footer>
    </StyledLayout>
  )
}

export default MainLayout
