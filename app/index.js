import 'log-timestamp'
import { setup } from './insights.js'
import { createServer } from './server.js'
import { startMessaging } from './messages/index.js'
import service from './constants/service-name.js'

const init = async () => {
  const server = await createServer()
  await server.start()
  await startMessaging()
  console.log('Server running on %s', server.info.uri)
  console.log(service.NAME, 'is ready to consume messages')
}

process.on('unhandledRejection', (error) => {
  console.log(error)
  process.exit(1)
})

setup()
init()
