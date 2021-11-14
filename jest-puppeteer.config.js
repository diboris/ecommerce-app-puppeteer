module.exports = {
    launch: {
        headless: process.env.HEADLESS === 'true',
        slowMo: 30,
        defaultViewport: {width: 1440, height: 900},
        args: process.env.HEADLESS === 'true' ? ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] : [],
    },
    browserContext: 'incognito',
    exitOnPageError: false,
}
