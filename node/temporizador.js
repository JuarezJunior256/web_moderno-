const schedule = require('node-schedule')

const tarefa1 = schedule.rescheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando tarefa 1', new Date.getSeconds())
    
})

setTimeout(() =>{
    tarefa1.cancel()
    console.log('Cancelaando Tarefa 1')
}, 2000)