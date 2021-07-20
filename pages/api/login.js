/* eslint-disable import/no-anonymous-default-export */
import { API_URL } from '@/config/index'

export default async function (req, res) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await strapiRes.json()
    console.log(data.jwt);
    if (strapiRes.ok) {
      // TODO: Set cookie

      res.status(200).json({ user: data.user })
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
