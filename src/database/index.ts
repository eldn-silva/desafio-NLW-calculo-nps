import { createConnection, Connection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions() // obtendo todas as informações do ORM CONFIG
    
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultOptions.database,
        }),
    )
}