import {DataTypes} from 'sequelize'
import db from '../db/config.js'

const User = db.define('tb_users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: DataTypes.STRING,
    confirmed:DataTypes.BOOLEAN

})

export default User;
