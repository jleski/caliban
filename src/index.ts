import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('hello.')
})

app.post('/webhook', async (c) => {
  const data = await c.req.json()
  console.log('Received webhook payload:', data)
  return c.json({ status: "ok", message: "payload received" })
})

export default app