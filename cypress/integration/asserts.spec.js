/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1
    expect(a).equal(1);
    expect(a,'Deveria ser 1').equal(1);/// Alterando para 2 daria erro
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


it('Object Equality', ()=>{
    const obj = {
        a:1,
        b:2
    }
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).equal(obj);
    expect(obj).to.be.deep.equal({a: 1, b:2}); /// deep é usado para entrar nas propriedades do objeto
    expect(obj).eql({a: 1, b:2});
    expect(obj).include({a: 1}); //verifique se neste objeto existe a propriedade a com valor 1
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty; ///o objeto não é vazio
    expect({}).to.does.empty; ///o objeto vazui esta vazio
})

it('Array', () =>{
    const arr= [1,2,3];

    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.include.members([1,3]);
    expect(arr).to.not.be.empty;
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;

} )