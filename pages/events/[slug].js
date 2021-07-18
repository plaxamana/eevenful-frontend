import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter()
  return (
    <Layout title={router.query.slug}>
      <h1>{router.query.slug}</h1>
    </Layout>
  )
}
