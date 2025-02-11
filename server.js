/* 테테테테토테토 테테테테토리스

Copyright 2025 적기 귀찮으니 알아서 기억하쇼 ㅇㅇ*/

// import acl from './utils/function/acl';
import express from 'express';
import pg from 'pg';

require('dotenv').config;

const host = process.env.HOST;
const port = process.env.PORT;
const dbtype = process.env.DB_TYPE;
const app = express();

if(dbtype === 'pg') {
    console.log('현재 postgresql은 지원하지 않습니다. DB type를 sqlite로 변경한 뒤 초기화하고 다시 시작해주세요.');
    process.exit(1);
}

app.listen()