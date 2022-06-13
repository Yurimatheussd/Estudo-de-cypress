/// <reference types="cypress"/>

describe('Cypress basic', () => {

    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Treinamento')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')


        //TO DO ----> IMPRMIR O LOG NO CONSOLE
        //TO DO ----> eSCREVER O LOG EM UM CAMPO TEXTO
    })

})

describe.only('Teste de Localização', () => {

    // Forma basica de fazer um click e uma acertiva
    /*it('Achar o botão clique me',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value','Obrigado!')
    }) */

    it('Achar o botão clique me', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })


})