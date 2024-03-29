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

            // posso usar tanto debugger como cy.debug()
            expect($el).to.have.css('color', 'rgb(255, 255, 255)')
            expect($el).to.have.class('pressed')

            cy.wrap($el).invoke('css','color').should('eq','rgb(255, 255, 255)')
            cy.wrap($el).invoke('hasClass','pressed').should('eq',true)
            cy.wrap($el).invoke('hasClass','pressed').should('be.true')

        })

    })



})