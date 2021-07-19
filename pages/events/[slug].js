import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'

export default function EventPage({ event }) {
  const router = useRouter()
  return (
    <Layout title={event.name}>
      <h1>{event.name}</h1>
    </Layout>
  )
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       event: events[0],
//     },
//   }
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map(event => ({
    params: { slug: event.slug },
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      event: events[0],
    },
  }
}
