import convict from 'convict'

const message = convict({
  messageQueue: {
    host: {
      doc: 'Host of Azure Service Bus message queue.',
      format: String,
      default: null,
      env: 'MESSAGE_QUEUE_HOST'
    },
    username: {
      doc: 'Username for Azure Service Bus message queue.',
      format: String,
      default: null,
      env: 'MESSAGE_QUEUE_USERNAME'
    },
    password: {
      doc: 'Password for Azure Service Bus message queue.',
      format: String,
      default: null,
      env: 'MESSAGE_QUEUE_PASSWORD'
    }
  },
  receiverSubscription: {
    address: {
      doc: 'Subscription name of Azure Service Bus receiver.',
      format: String,
      default: null,
      env: 'COMMS_SUBSCRIPTION_ADDRESS'
    },
    topic: {
      doc: 'Topic name of Azure Service Bus receiver.',
      format: String,
      default: null,
      env: 'COMMS_TOPIC_ADDRESS'
    },
    type: {
      doc: 'Type of Azure Service Bus receiver.',
      format: String,
      default: 'subscription'
    }
  }
})

message.validate({ allowed: 'strict' })

export default message