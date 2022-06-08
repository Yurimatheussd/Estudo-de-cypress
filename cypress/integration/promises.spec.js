it('sem teste, ainda', ()=>{ })


// Este metodo é mais um exemplo de function arrow


/*const getSomething = () => 10;

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end')
}
system(); */


// Aqui abaixo um exemplo de SetTimeout, usado para "simular" um atraso de retorno de um requisição, por exemplo.
// porem mesmo assim o navegador não espera o timeout...ele primeiro solicita dando undefined e depois ele retorna a função

/* const getSomething = () => {
    setTimeout(()=>{
        console.log('Respondendo...');
        return 11;
    }, 1000)

}

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end')
}
system(); */

// Abaixo segue a mesma função com o parametro callback que mesmo aplciando o desejado, não cria ordem, assim
//pode causar o chamado "callbackHell", que pode prejudicar testes grandes, pore exemplo.



/* const getSomething = callback => { // poderia colcoar (callback), mas no arrow function quando temos um parametro só não precisa do ()
    setTimeout(() => {
        callback(12);
    }, 1000)

}

const system = () => {
    console.log('init');
    getSomething(some => {
        console.log(`Something is ${some}`)
        console.log('end');
    })
}
system();
 */


/// Utilização de Promise

const getSomething = () => { 
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (13);
        },1000)
    })
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(some => {
        console.log(`Something is ${some}`)
        console.log('end');
    })
}
system();