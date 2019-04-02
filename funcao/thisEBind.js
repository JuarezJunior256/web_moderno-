const pessoa = {
    saudacao: 'Bom Dia',

    falar() {
      console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito de paradigas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();