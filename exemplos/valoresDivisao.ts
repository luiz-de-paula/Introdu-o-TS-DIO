function printaValores(num1: number, num2: number): void {
  console.log(num1 + num2)
  // void retorno vazio(nada), console.log não retorna nada por isso e´uma funcao sem retorno
}

function somarValoresNumericos(num1: number, num2: number, callback:(num: number) => number): number{
  let resultado = num1 + num2
  return callback(resultado)
}

function raizQuadrada(num: number): number{
  return num * num
}
function dividirValores(num: number): number{
  return num / num + num
}


alert(dividirValores(3))
alert( somarValoresNumericos(4, 12, raizQuadrada))