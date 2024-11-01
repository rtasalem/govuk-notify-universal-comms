import convict from 'convict'
import environments from '../constants/environments.js'

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
    },
    useCredentialChain: {
      doc: 'Use credential chain for authentication of Azure Service Bus message queue.',
      format: Boolean,
      default: process.env.NODE_END === environments.PRODUCTION
    },
    managedIdentityClientId: {
      doc: 'Client ID of Managed Identity of the microservice.',
      format: String,
      default: null,
      env: 'AZURE_CLIENT_ID'
    },
    appInsights: {
      doc: 'Azure Application Insights instance.',
      format: '*',
      default: process.env.NODE_ENV === environments.PRODUCTION ? await import('applicationinsights') : undefined
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