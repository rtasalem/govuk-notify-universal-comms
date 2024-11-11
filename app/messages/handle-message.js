import util from 'util'
import { sendEmail } from './send-email.js'

const handleMessage = async (message, receiver) => {
  try {
    await sendEmail(message)
    await receiver.completeMessage(message)
    console.log('Message received: ', message.body)
  } catch (error) {
    throw new Error('Message error', util.inspect(error.message, false, null, true))
  }
}

export { handleMessage }
