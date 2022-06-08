/// <reference types="cypress" />

it('A external test...', () => {
    // neste caso aqui fica o teste que queremos aplicar...estou passando um VAZIO!!
})

describe('Should group tests...', ()=>{  //netse caso eu tenho um grupo de teste onde o primeiro parametro é o nome do grupo e o segundo todos os N testes desse grupo
    it('A external test...', () => {
      
    })

    it('A external test...', () => {
        
    })
})


//posso ter tbm um grupo com varios subgrupos

describe('Should group tests...', ()=>{  //netse caso eu tenho um grupo de teste onde o primeiro parametro é o nome do grupo e o segundo todos os N testes desse grupo
    describe('Should Subgroup 1 tests...', ()=>{  
        it('A external test...', () => {
          
        })
    
        it('A external test...', () => {
            
        })
    })

    describe('Should Subgroup 2 tests...', ()=>{  
        it('A external test...', () => {
          
        })
    
        it('A external test...', () => {
            
        })
    })
})


// caso eu queira  rodar somente um teste eu possu usar it.only(,()=>{})
//caso seja necessario pular um teste podemos usar skip