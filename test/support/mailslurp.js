const fetch = require('node-fetch')

const headers = {'x-api-key': MAILSLURP_API_KEY}

async function createInbox() {
    const inboxResponse = await fetch('https://api.mailslurp.com/inboxes/', {method: 'post', headers: headers})
    const inbox = await inboxResponse.json()
    return {
        id: inbox.id,
        email: inbox.emailAddress
    }
}

async function getSignInLink(inbox) {
    const emailsResponse = await fetch('https://api.mailslurp.com/inboxes/' + inbox + '/emails', {headers: headers})
    const emails = await emailsResponse.json()
    if (emails.length === 0) {
        return null
    }
    const emailId = emails[0].id

    const emailLinksResponse = await fetch('https://api.mailslurp.com/emails/' + emailId + '/links', {headers: headers})
    const emailLinks = await emailLinksResponse.json()
    return emailLinks.links[0]
}

module.exports.createInbox = createInbox
module.exports.getSignInLink = getSignInLink
