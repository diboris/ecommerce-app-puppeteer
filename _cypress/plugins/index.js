const fetch = require('node-fetch')
const headers = {'x-api-key': '7949d7f4401b3e5931b7e46bd27d3265d73a6d1bfb997022053ed62e413c7bc7'}

module.exports = (on, config) => {
    on('task', {
        async createInbox() {
            const inboxResponse = await fetch('https://api.mailslurp.com/inboxes/', {method: 'post', headers: headers})
            const inbox = await inboxResponse.json()
            return {
                id: inbox.id,
                email: inbox.emailAddress
            }
        },

        async getSignInLink(inbox) {
            const emailsResponse = await fetch('https://api.mailslurp.com/inboxes/' + inbox + '/emails', {headers: headers})
            const emails = await emailsResponse.json()
            if (emails.length === 0) {
                return null
            }
            const emailId = emails[0].id

            const emailLinksResponse = await fetch('https://api.mailslurp.com/emails/' + emailId + '/links', {headers: headers})
            const emailLinks = await emailLinksResponse.json()
            return emailLinks.links[0]
        },
    })
}
