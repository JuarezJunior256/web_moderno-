// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'a'}
const pai = { __proto__: avo, attr2: 'b'}
const filho = { __proto__: pai, attr3: 'c'}
console.log(filho.attr1, filho.attr2);

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    statu() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());


