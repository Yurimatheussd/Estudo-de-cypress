/// <reference types="cypress"/>

describe('Teste de bateria de neto', () => {
    before(() => {
        cy.visit('https://arneto19.github.io/drum-kit/')
    })

    beforeEach(() => {
        cy.reload()
    })


    it('Tocando musica', () => {
        cy.get('.a').type('a').then($el => {
            expect($el).to.have.css('color', 'rgb(255, 255, 255)')
        })
        //cy.debug()
    })
})