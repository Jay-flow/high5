import Layout from "../components/Layout"
import { useRouter } from "next/router"

export default function Detail(): JSX.Element {
  const router = useRouter()
  return (
    <Layout>
      <img src={router.query.imageUrl as string} alt="" />
    </Layout>
  )
}
