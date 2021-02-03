import "antd/dist/antd.css"
import Layout from "../../components/Layout"
import { useRouter } from "next/router"
import styled from "styled-components"

const StyledImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`

export default function Detail(): JSX.Element {
  const router = useRouter()
  return (
    <Layout>
      <StyledImage src={router.query.imageUrl as string} />
    </Layout>
  )
}
