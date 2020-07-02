import { Sequelize } from 'sequelize'
import { Application } from './declarations'

export default function (app: Application) {
    const env = process.env
    // mysql://tracker:tracker@mysql:3306/tracker
    const sequelize = new Sequelize(`${env.DB_HOST}://${env.DB_USERNAME}:${env.DB_PASSWORD}@db:${env.DB_PORT}/${env.DB_DATABASE}`, {
        dialect: 'mysql',
        logging: false,
        define: {
            freezeTableName: true,
        },
    })
    const oldSetup = app.setup

    app.set('sequelizeClient', sequelize)

    app.setup = function (...args) {
        const result = oldSetup.apply(this, args)

        // Set up data relationships
        const models = sequelize.models
        Object.keys(models).forEach(name => {
            if ('associate' in models[name]) {
                ;(models[name] as any).associate(models)
            }
        })

        // Sync to the database
        app.set('sequelizeSync', sequelize.sync())

        return result
    }
}
