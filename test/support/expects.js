/* global page */

const fs = require('fs')

async function expectFileExists(filePath) {
    let fileExists = false
    while (fileExists === false) {
        fileExists = fs.existsSync(filePath)
        if (fileExists === true) {
            break
        }
        await page.waitForTimeout(1000)
    }
    expect(fileExists).toBe(true)
}

module.exports.expectFileExists = expectFileExists
