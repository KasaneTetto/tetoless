import dotenv from 'dotenv';
dotenv.config();

const pgInit = {
    "user": process.env.DB_USERID,
    "host": process.env.DB_HOST,
    "database": process.env.DB_NAME,
    "password": process.env.DB_PASSWD,
    "port": process.env.DB_PORT
}

export default function service() {
    pgInit
}