/* global page */

const {login} = require('./support/login')
const {configureTest, getXpath, getText, navigationClick, getCss} = require('./support/puppeteer')

describe('Login flow (unauth)', () => {
    beforeEach(async () => {
        await configureTest()
        await page.goto(URL, {waitUntil: 'networkidle0'})
    })

    it('Signing up via MagicLink with an existing email', async () => {
        const signIn = await getXpath('//button[contains(text(),"Sign in")]')
        await signIn.click()
        const inboxEmail = await login()

        const emailElement = await getXpath('//span[contains(text(),"Open user menu")]/preceding::span')
        const emailText = await getText(emailElement)
        expect(emailText).toBe(inboxEmail)
    })
})

describe('Login flow (auth)', () => {
    beforeEach(async () => {
        await configureTest()
        await page.goto(URL, {waitUntil: 'networkidle0'})
        const signIn = await getXpath('//button[contains(text(),"Sign in")]')
        await signIn.click()
        await login()
    })

    it('A user can sign out when logged in via MagicLink', async () => {
        const userMenuButton = await getXpath('//span[contains(text(),"Open user menu")]/ancestor::button')
        await userMenuButton.click()

        const singOutButton = await getXpath('//button[contains(text(),"Sign out")]')
        await navigationClick(singOutButton)

        const singInButton = await getCss('button[href="#"]')
        const signInButtonText = await getText(singInButton)

        expect(signInButtonText).toBe('Sign in')
    })
})
