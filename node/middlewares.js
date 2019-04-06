//middleware pattern (chain of responsibility)
const pessoa1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const pessoa2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const pessoa3 = (ctx) => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length  &&
          middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}

exec(ctx, pessoa1, pessoa2, pessoa3)
console.log(ctx);
