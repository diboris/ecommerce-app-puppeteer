/* global page */

const {getCss} = require('./puppeteer')

async function findCheckoutFrame() {
    await page.waitForSelector('iframe[src*="authorize-with-url-inner"]')

    let authFrame = undefined
    while (authFrame === undefined) {
        authFrame = await page.frames().find(frame => frame.url().includes('authorize-with-url-inner'))
        if (authFrame === undefined) {
            await page.waitForTimeout(1000)
        }
    }

    await authFrame.waitForSelector('iframe')
    const childFrame = await authFrame.childFrames()[0]

    await childFrame.waitForSelector('iframe')
    return await childFrame.childFrames()[0]
}

async function fillCardDetails(details) {
    const cardNumber = await getCss('#cardNumber')
    await cardNumber.type(details.cardNumber)

    const cardExpiry = await getCss('#cardExpiry')
    await cardExpiry.type(details.cardExpiry)

    const cardCvc = await getCss('#cardCvc')
    await cardCvc.type(details.cardCvc)

    const billingName = await getCss('#billingName')
    await billingName.type(details.billingName)

    const country = await getCss('#billingCountry')
    await country.select(details.country)
}

module.exports.findCheckoutFrame = findCheckoutFrame
module.exports.fillCardDetails = fillCardDetails
