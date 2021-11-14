/* global page */

const path = require('path')
const {login} = require('./support/login')
const {findCheckoutFrame, fillCardDetails} = require('./support/checkout')
const {
    configureTest, getXpath, navigationClick, getCss, getXpathInFrame,
    createDownloadFolder, getText, getCssList, clickToNewPage
} = require('./support/puppeteer')
const {expectFileExists} = require('./support/expects')

describe('Checkout flow (auth)', () => {
    beforeEach(async () => {
        await configureTest()
        await page.goto(URL, {waitUntil: 'networkidle0'})
        const signIn = await getXpath('//button[contains(text(),"Sign in")]')
        await signIn.click()
        await login()
    })

    it('A user can subscribe to the Application UI Icon Pack by paying 20 pounds monthly', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £20/mo")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Subscribe to Application UI Icon Pack")]')

        await fillCardDetails(VALID_CARD_DETAILS)

        const subscribeButton = await getCss('button[type="submit"]')
        await subscribeButton.click()

        const frame = await findCheckoutFrame()
        await frame.waitForSelector('section[class="source"]')

        const completeAuthButton = await getXpathInFrame(frame, '//button[contains(text(),"Complete authentication")]')
        await navigationClick(completeAuthButton)

        const downloadPath = await createDownloadFolder()

        const downloadButton = await getCss('a[href="/IconPack.zip"]')
        await downloadButton.click()

        const filePath = path.join(downloadPath, 'IconPack.zip')

        await expectFileExists(filePath)
    })

    it('A user can buy the Application UI Icon Pack for 200 pounds', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        await fillCardDetails(VALID_CARD_DETAILS)

        const subscribeButton = await getCss('button[type="submit"]')
        await subscribeButton.click()

        const frame = await findCheckoutFrame()
        await frame.waitForSelector('section[class="source"]')

        const completeAuthButton = await getXpathInFrame(frame, '//button[contains(text(),"Complete authentication")]')
        await navigationClick(completeAuthButton)

        const downloadPath = await createDownloadFolder()

        const downloadButton = await getCss('a[href="/IconPack.zip"]')
        await downloadButton.click()

        const filePath = path.join(downloadPath, 'IconPack.zip')

        await expectFileExists(filePath)
    })

    it('A user can decline any purchase while paying', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        await fillCardDetails(VALID_CARD_DETAILS)

        const subscribeButton = await getCss('button[type="submit"]')
        await subscribeButton.click()

        const frame = await findCheckoutFrame()
        await frame.waitForSelector('section[class="source"]')

        const failAuthButton = await getXpathInFrame(frame, '//button[contains(text(),"Fail authentication")]')
        await failAuthButton.click()

        const authError = await getCss('p[class*="ConfirmPayment-Error"]')
        const authErrorText = await getText(authError)

        expect(authErrorText).toBe('We are unable to authenticate your payment method. Please choose a different payment method and try again.')
    })

    it('A user can not buy the Application UI Icon Pack with invalid card details', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £20/mo")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Subscribe to Application UI Icon Pack")]')

        await fillCardDetails(INVALID_CARD_DETAILS)

        const subscribeButton = await getCss('button[type="submit"]')
        await subscribeButton.click()

        const frame = await findCheckoutFrame()
        await frame.waitForSelector('section[class="source"]')

        const completeAuthButton = await getXpathInFrame(frame, '//button[contains(text(),"Complete authentication")]')
        await completeAuthButton.click()

        const alert = await getCss('span[role="alert"]')
        const alertText = await getText(alert)

        expect(alertText).toBe('Your card has been declined.')
    })

    it('A user can not buy the Application UI Icon Pack without card details', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        const subscribeButton = await getCss('button[type="submit"]')
        await subscribeButton.click()

        const invalidInputs = await getCssList('input[aria-invalid="true"]')

        expect(invalidInputs).toHaveLength(4)
    })

    it('A user can read Global Privacy Policy', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        const poweredByStripeLink = await getXpath('//span[contains(text(),"Powered by ")]')
        const newPage = await clickToNewPage(poweredByStripeLink)
        const url = await newPage.url()

        // NOTE: matching url instead of title to be language independent
        expect(url).toMatch(/^https:\/\/stripe.com\/.+/)
    })

    it('A user can read Terms', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        const termLink = await getXpath('//span[contains(text(),"Term")]')
        const newPage = await clickToNewPage(termLink)
        const title = await newPage.title()

        expect(title).toMatch(/^Stripe Checkout User Services Agreement .+/)
    })

    it('A user can read Privacy Policy', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        const privacyLink = await getXpath('//span[contains(text(),"Privacy")]')
        const newPage = await clickToNewPage(privacyLink)
        const title = await newPage.title()

        expect(title).toMatch(/^Privacy Policy .+/)
    })

    it('A user can not buy the Application UI Icon Pack while offline', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await navigationClick(payButton)

        await page.waitForXPath('//span[contains(text(),"Application UI Icon Pack")]')

        await fillCardDetails(VALID_CARD_DETAILS)

        const subscribeButton = await getCss('button[type="submit"]')

        await subscribeButton.click()
        await page.setOfflineMode(true);

        const errorMessageElement = await getCss('.ConfirmPayment-Error')
        const errorMessage = await getText(errorMessageElement)

        expect(errorMessage).toBe('We are experiencing connection issues. You have not been charged. Please check your internet connection and try again.')
    })
})

describe('Checkout flow (unauth)', () => {
    beforeEach(async () => {
        await configureTest()
        await page.goto(URL, {waitUntil: 'networkidle0'})
    })

    it('A user can not buy the Application UI Icon Pack for 220£ when not logged in', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £220")]')
        await payButton.click()

        const singInMessage = await getCss('h3[class*="text-xl"]')
        const singInMessageText = await getText(singInMessage)

        expect(singInMessageText).toBe('Sign in to your account')
    })

    it('A user can not subscribe to the Application UI Icon Pack for 20£ per month when not logged in', async () => {
        const payButton = await getXpath('//button[contains(text(),"Pay £20/mo")]')
        await payButton.click()

        const singInMessage = await getCss('h3[class*="text-xl"]')
        const singInMessageText = await getText(singInMessage)

        expect(singInMessageText).toBe('Sign in to your account')
    })
})
