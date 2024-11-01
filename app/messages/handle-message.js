import util from 'util'

const handleMessage = async (message, receiver) => {
  try {
    await receiver.completeMessage(message)
    console.log('Message received: ', message.body)
  } catch (error) {
    throw new Error('Message error', util.inspect(error.message, false, null, true))
  }
}

export { handleMessage }