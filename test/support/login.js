/* global page */

const {createInbox, getSignInLink} = require('./mailslurp')
const {getXpath} = require('./puppeteer')

async function login() {
    const inbox = await createInbox()

    await page.type('#email', inbox.email)

    const submitButton = await getXpath('//button[contains(text(),"Sign in with email")]')
    await submitButton.click()

    await page.waitForXPath('//h3[contains(text(),"Check your email")]')

    let signInLink = null
    while (signInLink === null) {
        signInLink = await getSignInLink(inbox.id)
        if (signInLink === null) {
            await page.waitForTimeout(1000)
        }
    }

    await page.goto(signInLink, {waitUntil: 'networkidle0'})
    return inbox.email
}

module.exports.login = login
