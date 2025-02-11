export const service = {
    pgInit: {
        "user": process.env.DB_USERID,
        "host": process.env.DB_HOST,
        "database": process.env.DB_NAME,
        "password": process.env.DB_PASSWD,
        "port": process.env.DB_PORT
    
    }
}