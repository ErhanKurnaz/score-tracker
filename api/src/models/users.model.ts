// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize'
import { Application } from '../declarations'

export default function (app: Application) {
    const sequelizeClient: Sequelize = app.get('sequelizeClient')
    const users = sequelizeClient.define(
        'users',
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            hooks: {
                beforeCount(options: any) {
                    options.raw = true
                },
            },
        }
    )

    ;(users as any).associate = (models: any) => {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    }

    return users
}
