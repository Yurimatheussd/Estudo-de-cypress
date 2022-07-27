/// <reference types="cypress"/>

describe('Teste de bateria de neto', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    //Its é usado para entrar nas propriedades ou array de elementos na DOM
    it('Usando Its', () => {
        cy.title().its('length').should('be.equal', 20)

    })
    //invoke 

    it('Usando invoke', () => {
       cy.get('#formNome').invoke('val','Texto via invoke')
       cy.window().invoke('alert','Alerta foi?')
       cy.get('#resultado')
        .invoke('html','<form action="http://www.google.com"> <button type="url">Hacked!!</button> </form>'
    )


    })
})