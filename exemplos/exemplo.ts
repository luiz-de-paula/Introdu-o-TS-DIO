let button = document.getElementById("button")
let input1 = document.getElementById("input1") as HTMLInputElement
let input2 = document.getElementById("input2") as HTMLInputElement


function adicionarNumeros(num1: number, num2:number, devPrintar: boolean, frase: string){
  let resultado = num1 + num2
 if(devPrintar) {
  alert(frase + resultado)
 }

 return num1 + num2
}
let devPrintar = true
let frase = 'O valor é: '


  button?.addEventListener('click',  () =>{
    if(input1 && input2){
      alert(adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase))
    }
  })
  
