const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissão: 'desenvolvedora'
}
const andre: {nome: string, idade: number, profissão: string } = {
  nome: 'Andre',
  idade: 28, 
  profissão: 'pintor'
}
const mario: {nome: string, idade: number, profissão: string } = {
  nome: 'Mario',
  idade: 28, 
  profissão: 'pintor de rodapé'
}
enum Profissao{
  Professora,
  Porteiro,
  Desenvolvedora,
  JogadorDeFutebol
}
interface Pessoa{
  nome:string,
  idade: number,
  profissao?: Profissao
}
interface Estudante extends Pessoa {
  materias: string[]
}
const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 32,
  profissao: Profissao.Desenvolvedora
}

const Mariana: Estudante = {
  nome: 'Mariana',
  idade: 32,
   materias: ['matematica, ingles']
}
function listar( lista: string[]){
  for(const item of lista){
   
    console.log(`-`, item)
  }
}

listar(Mariana.materias)