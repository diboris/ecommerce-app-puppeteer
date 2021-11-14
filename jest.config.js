module.exports = {
    preset: 'jest-puppeteer',
    globals: {
        PUPPETEER_TIMEOUT: 60000,
        URL: 'https://qa-challenge-tabeo.vercel.app/',
        MAILSLURP_API_KEY: '041e420a915d64af867a4d5096944f30c062fd3fe9f2e7f7927bb704ecb4b0e0',
        VALID_CARD_DETAILS: {
            cardNumber: '4000002760003184',
            cardExpiry: '09/23',
            cardCvc: '555',
            billingName: 'Qa Tabeo',
            country: 'AU'
        },
        INVALID_CARD_DETAILS: {
            cardNumber: '4000008260003178',
            cardExpiry: '09/23',
            cardCvc: '555',
            billingName: 'Qa Tabeo',
            country: 'AU'
        },
    },
    testTimeout: 120000,
    verbose: true,
};
