/* global page */

const fs = require('fs')
const path = require('path')
const os = require('os')

async function configureTest() {
    await page.setDefaultTimeout(PUPPETEER_TIMEOUT)
    await jestPuppeteer.resetBrowser()
}

async function getXpath(selector) {
    await page.waitForXPath(selector)
    const element = await page.$x(selector)
    return element[0]
}

async function getXpathInFrame(frame, selector) {
    await frame.waitForXPath(selector)
    const element = await frame.$x(selector)
    return element[0]
}

async function getXpathList(selector) {
    await page.waitForXPath(selector)
    return await page.$x(selector)
}

async function getCss(selector) {
    await page.waitForSelector(selector)
    return await page.$(selector)
}

async function getCssList(selector) {
    await page.waitForSelector(selector)
    return await page.$$(selector)
}

async function getText(element) {
    return await page.evaluate(el => el.textContent, element)
}

async function navigationClick(element) {
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle0'}),
        element.click()
    ])
}

async function createDownloadFolder() {
    const downloadPath = fs.mkdtempSync(path.join(os.tmpdir(), 'tabeo'))
    await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadPath
    })
    return downloadPath
}

async function clickToNewPage(element) {
    const pagePromise = new Promise(resolve => browser.once('targetcreated', target => resolve(target.page())))
    await element.click()
    return await pagePromise
}

module.exports.configureTest = configureTest
module.exports.getXpathInFrame = getXpathInFrame
module.exports.getXpath = getXpath
module.exports.getXpathList = getXpathList
module.exports.getCss = getCss
module.exports.getCssList = getCssList
module.exports.getText = getText
module.exports.navigationClick = navigationClick
module.exports.createDownloadFolder = createDownloadFolder
module.exports.clickToNewPage = clickToNewPage
