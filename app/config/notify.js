import convict from 'convict'

const notify = convict({
  notifyApiKey: {
    doc: 'API key for sending requests to the GOV.UK Notify API.',
    format: String,
    default: null,
    env: 'NOTIFY_API_KEY'
  },
  notifyUniversalEmailTemplateId: {
    doc: 'Template ID for universal email template in GOV.UK Notify.',
    format: String,
    default: null,
    env: 'NOTIFY_UNIVERSAL_EMAIL_TEMPLATE_ID'
  }
})

notify.validate({ allowed: 'strict' })

export default notify