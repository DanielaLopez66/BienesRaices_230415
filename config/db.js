import Sequelize  from 'sequelize'
const db = Sequelize('bienesraices_node_mvc', 'root','',{
    hodt: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define:{
        timestamps: true
    },
    pool: {
        max: 5,
        min : 0,
        acquire: 30000,
        idle:10000
    },
    operatorAliases: false

});