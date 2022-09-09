const Sequelize = require('sequelize')
const sequelize = new Sequelize ('sys', 'root', 'Juliadi12345677', {
    dialect: 'mysql',
    host: 'localhost'
})
sequelize.authenticate().then(function() {
    console.log('conectado!')
}).catch(function(erro) {
    console.log('falha! nao conectado!' +erro)
})
