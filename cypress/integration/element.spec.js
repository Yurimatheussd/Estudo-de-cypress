/// <reference types="cypress"/>


describe('Cypress elements', () => {

    /*     Before é considerado um before all, será executado uma vez antes de todos os testes
        já o Before Each ira ser executado antes de cada teste (each signfica cada) */



    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() => {
        cy.reload()
    })


    it('teste de campo no body', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Teste Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        cy.reload()
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Text fild', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')



        cy.get('#elementosForm\\:sugestoes')
            .type('Text Area')
            .should('have.value', 'Text Area')



        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Texto pequeno!@#{Backspace}{Backspace}{Backspace}')
            .should('have.value', 'Texto pequeno')



        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .clear()
            .type('Small Text{Selectall}Tiny text', {
                delay: 100
            })
            .should('have.value', 'Tiny text')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
            .should('have.length', 2)
    })

    it('CheckBox', () => {
        cy.get("[name='formComidaFavorita']")
            .should('have.length', 4)

        cy.get('#formComidaPizza')
            .click()

        cy.get("[name='formComidaFavorita']")
            .click({
                multiple: true
            })

        cy.get('#formComidaPizza')
            .should('not.be.checked')

        cy.get('#formComidaVegetariana')
            .should('be.checked')


    })

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('1o grau incompleto')
            .should('have.value', '1grauincomp')
        //Para buscar os elementos de um combo eu preciso olhar pro HTML e ver alguma tag que traga essas opções...neste caso o option    
        cy.get('[data-test=dataEscolaridade] option').should('have.length', '8')

        //Aqui vou validar um elemento dentro das opções buscando pelo array...buscando uma collection
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            let values = []
            $arr.each(function() {
                values.push(this.innerHTML)
                console.log(this)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
            console.table(values)
        })

    })

    //TODO validar as opções do combo

    it('ComboMultiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
        //TODO  validar opções selecionadas do combo multiplo
    })
})