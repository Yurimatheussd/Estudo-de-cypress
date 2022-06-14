/// <reference types="cypress"/>



describe('Sync teste', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() => {
        cy.reload()
    })

    it('Espera Campo texto', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#novoCampo')
            .type('Teste de campo Delay', {
                delay: 100
            })
            .should('have.value', 'Teste de campo Delay')
    })

    it('Esperar Lista de itens', () => {
        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li')
            .should('not.exist')

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso de timeout', () => {
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo').should('exist')

    })

})