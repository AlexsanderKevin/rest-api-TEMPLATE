import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: './db.sqlite'
})

export default sequelize
