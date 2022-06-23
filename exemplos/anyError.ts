let anyNovamente : any
    anyNovamente : 3
    anyNovamente : 'teste'
    anyNovamente : 5

let stringTeste: string = 'verificar ' 
    stringTeste =  anyNovamente

let unknownvalor : unknown
unknownvalor: 3
unknownvalor: 'agora vai'
unknownvalor: true
unknownvalor: 'vai sim'

let stringTeste2: string = 'Agora vai'
// stringTeste2 = unknownvalor 

if (typeof unknownvalor === 'string'){
stringTeste2 = unknownvalor

}
function jogaErro(erro: string, codigo: number){
  throw{error: erro, code: codigo}
}
jogaErro('Voce errou', 500)