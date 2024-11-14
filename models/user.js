import {DataTypes} from 'sequelize'
import db from '../db/config.js'

const User=db.define('tb_users',{
    name:{
        type:DataTypes.STRING,
        allownull:false
    },
    email:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allownull:false
    },
    token:DataTypes.STRING,
    confirmed:DataTypes.BOOLEAN
},{
    hooks:{
        beforeCreate: async function (user) {
            //Generamos la clave para el hasheo, se recomiendan 10 rondas de aleatorizacion para consumir demasiados recursos de hardware y hacer lento el proceso.
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt);
            
        }
    }
})

export default User;