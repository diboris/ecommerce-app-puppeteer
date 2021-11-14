/* global page */

const {configureTest, getXpath, getXpathList, getText} = require('./support/puppeteer')

describe('Customer engagement flow', () => {
    beforeEach(async () => {
        await configureTest()
        await page.goto(URL, {waitUntil: 'networkidle0'})
    })

    it('A user can read the Customer reviews section', async () => {
        const customerReviewButton = await getXpath('//button[contains(text(),"Customer Reviews")]')
        await customerReviewButton.click()

        const customerReview = await getXpath('//div[@role="tabpanel"]/h3')
        const title = await getText(customerReview)
        expect(title).toBe('Customer Reviews')

        const reviewers = await getXpathList('//div[@role="tabpanel"]//h3[contains(@class,"font-medium")]')
        expect(reviewers.length).toBeGreaterThan(0)
    })

    it('A user can read the FAQ section', async () => {
        const faqButton = await getXpath('//button[contains(text(),"FAQ")]')
        await faqButton.click()

        const faq = await getXpath('//dl[@role="tabpanel"]/h3')
        const title = await getText(faq)
        expect(title).toBe('Frequently Asked Questions')
    })

    it('A user can read the License section', async () => {
        const licenceButton = await getXpath('//button[contains(text(),"License")]')
        await licenceButton.click()

        const licence = await getXpath('//div[@role="tabpanel"]/h3')
        const title = await getText(licence)
        expect(title).toBe('License')
    })
})
