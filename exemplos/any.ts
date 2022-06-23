let valorAny: any
valorAny = 3 
valorAny = 'Olá'
valorAny = true 

let valorString: string  = 'teste'
valorString = valorAny

let valorString2: string  = 'testao'
valorString2 = valorAny

function somaStrings(string: string, string2: string){
  console.log(string + string2)
}

somaStrings(valorString, valorString2)
somaStrings('Olá', 'como vai')