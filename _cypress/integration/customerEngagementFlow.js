const hostUrl = 'https://qa-challenge-tabeo.vercel.app/'

describe('Customer engagement flow', () => {
    it('A user can read the Customer reviews section', () => {
        cy.visit(hostUrl)
        cy.get('button').contains('Customer Reviews').click()
        cy.get('#headlessui-tabs-panel-4').should('be.visible')
    })

    it('A user can read the FAQ section', () => {
        cy.visit(hostUrl)
        cy.get('button').contains('FAQ').click()
        cy.get('#headlessui-tabs-panel-5').should('be.visible')
    })

    it('A user can read the License section', () => {
        cy.visit(hostUrl)
        cy.get('button').contains('License').click()
        cy.get('#headlessui-tabs-panel-6').should('be.visible')
    })
})
