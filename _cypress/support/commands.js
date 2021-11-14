const {recurse} = require('cypress-recurse')

Cypress.Commands.add('login', () => {
    cy.task('createInbox').then((inbox) => {
        cy.get('#email').type(inbox.email)
        cy.get('button').contains('Sign in with email').click()
        cy.get('#headlessui-dialog-title-13').contains('Check your email').should('be.visible')
        recurse(() => cy.task('getSignInLink', inbox.id),
            Cypress._.isString, {
                log: false,
                delay: 1000,
                timeout: 20000,
            })
            .then((link) => {
                cy.visit(link)
                cy.get('span[class="text-gray-600 text-sm mr-2"]').should('contain', inbox.id)
            })
    })
})

Cypress.Commands.add('EnterExistingCardDetail', () => {
    cy.get('#cardNumber').type('4000002760003184')
    cy.get('#cardExpiry').type('05/29')
    cy.get('#cardCvc').type('555')
    cy.get('#billingName').type('Qa Tabeo')
    cy.get('#billingCountry').select('Netherlands')
    cy.get('button[data-testid="hosted-payment-submit-button"]').click()
})

Cypress.Commands.add('EnterNonExistingCardDetail', () => {
    cy.get('#cardNumber').type('4000008260003178')
    cy.get('#cardExpiry').type('05/29')
    cy.get('#cardCvc').type('555')
    cy.get('#billingName').type('Qa Tabeo')
    cy.get('#billingCountry').select('Netherlands')
    cy.get('button[data-testid="hosted-payment-submit-button"]').click()
})
