import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
})

export const initDatabase = () => {
    sequelize.sync({ force: true }).then(() => {
        console.log('All tables created!')
    }).catch(( error ) => {
        console.error('Error creating tables:', error)
    })
}

export default sequelize
