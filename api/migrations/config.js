const env = process.env.NODE_ENV || 'development'
require('dotenv').config()

const { DB_DATABASE, DB_PORT, DB_PASSWORD, DB_USERNAME, DB_HOST } = process.env

module.exports = {
    [env]: {
        dialect: DB_HOST,
        url: `${DB_HOST}://${DB_USERNAME}:${DB_PASSWORD}@db:${DB_PORT}/${DB_DATABASE}`,
        migrationStorageTableName: '_migrations',
    },
}
