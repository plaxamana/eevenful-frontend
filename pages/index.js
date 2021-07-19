import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {
      events,
    },
    revalidate: 1,
  }
}
