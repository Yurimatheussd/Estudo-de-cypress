/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1); /// Alterando para 2 daria erro
    expect(a).to.be.equal(1); /// Alterando para 2 daria erro
    expect('a').not.to.be.equal('b');
})



it('Thutht', () => {
    const a = true;
    const b = null;
    let c;


    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(b).not.to.be.false;
    expect(c).to.be.undefined;
})


it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).equal(obj);
    expect(obj).to.be.deep.equal({ /// deep é usado para entrar nas propriedades do objeto
        a: 1,
        b: 2
    });
    expect(obj).eql({
        a: 1,
        b: 2
    });
    expect(obj).include({
        a: 1
    }); //verifique se neste objeto existe a propriedade a com valor 1
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty; ///o objeto não é vazio
    expect({}).to.be.empty; ///o objeto vazui esta vazio
})

it('Array', () => {
    const arr = [1, 2, 3];

    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    expect(arr).to.not.be.empty;
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;

})

it('Type', () => {
    const num = 1
    const srt = 'String'

    expect(num).to.be.a('number');
    expect(srt).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String', () => {
    const str = 'String Teste'

    expect(str).to.be.equal('String Teste')
    expect(str).not.to.be.empty
    expect(str).to.have.length(12); /// Deve conter 12 caracteres
    expect(str).to.contains('Teste');
    expect(str).to.match(/^String/) /// Deve iniciar com String
    expect(str).to.match(/Teste$/) /// Deve finalizar com Teste
    expect(str).to.match(/.{12}/) /// Deve conter 12 caracteres
    expect(str).to.match(/\w+/) /// tem apenas letras
    expect(str).to.match(/\D+/) /// Não contem numeros
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.8989878

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); //acima de 
    expect(number).to.be.below(6); //abaixo de 
    expect(floatNumber).to.be.equal(5.8989878);
    expect(floatNumber).to.be.closeTo(5.9, 0.1); // perto de x numero com uma precisão de y casas decimais
    expect(floatNumber).to.be.above(5);


})