import crypto from 'crypto'
import notifyClient from '../clients/notify-client.js'

const sendEmail = async (message) => {
  const emailAddresses = Array.isArray(message.body.emailAddress)
    ? message.body.emailAddress
    : [message.body.emailAddress]

  for (const emailAddress of emailAddresses) {
    try {
      await notifyClient.sendEmail(
        message.body.notifyTemplateId,
        emailAddress,
        {
          personalisation: message.body.personalisation,
          reference: crypto.randomUUID()
        }
      )
    } catch (error) {
      console.log('Error sending email(s)', error)
    }
  }
}

export { sendEmail }
