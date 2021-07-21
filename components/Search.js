import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Search.module.css'

export default function Search() {
  const [term, setTerm] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/events/search?term=${term}`)
    setTerm('')
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <input
            type='text'
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder='Search Events'
            style={{ paddingLeft: '2.5em' }}
          />
          <FaSearch
            style={{
              color: '#7a7a7a',
              position: 'absolute',
              top: '8px',
              left: '8px',
            }}
          />
        </div>
      </form>
    </div>
  )
}
