const hostUrl = 'https://qa-challenge-tabeo.vercel.app/'

describe('Checkout flow', () => {
    it('A user can not subscribe to the Application UI Icon Pack for 20£ per month when not logged in', () => {
        cy.visit(hostUrl)
        cy.get('button').contains('Pay £20/mo').click()
        cy.get('p').contains('To get this product you need to be logged in. Please sign in to continue.').should('be.visible')
    })

    it('A user can not buy the Application UI Icon Pack for 220£ when not logged in', () => {
        cy.visit(hostUrl)
        cy.get('button').contains('Pay £220').click()
        cy.get('p').contains('To get this product you need to be logged in. Please sign in to continue.').should('be.visible')
    })
})
