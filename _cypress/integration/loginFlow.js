const hostUrl = 'https://qa-challenge-tabeo.vercel.app/'

describe('Login flow', () => {
    it('Signing up via MagicLink with an existing email', () => {
        cy.visit(hostUrl)

        cy.get('button').contains('Sign in').click()

        cy.login()

        cy.intercept('/api/checkout/subscription', (request) => {
            request.on('response', (response) => {
                response.headers.location = '/'
            })
        }).as('checkoutRequest')

        cy.get('button').contains('Pay £20/mo').click()

        cy.wait('@checkoutRequest').its('response.statusCode').should('eq', 303)
    })
})
