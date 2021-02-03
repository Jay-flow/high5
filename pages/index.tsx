import "antd/dist/antd.css"
import Layout from "../components/Layout"
import SearchContainer from "../components/SearchContainer"
import PictureContainer from "../components/PictureContainer"
import styled from "styled-components"

const Main = styled.div`
  padding: 20px 50px;
  height: 100%;
`

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Main>
        <SearchContainer />
        <PictureContainer />
      </Main>
    </Layout>
  )
}
