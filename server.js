/* 테테테테토테토 테테테테토리스

Copyright 2025 적기 귀찮으니 알아서 기억하쇼 ㅇㅇ*/

import express from 'express';
import pg from 'pg';
const app = express();

require('dotenv').config;

const host = process.env.HOST;
const port = process.env.PORT;
const dbtype = process.env.DB_TYPE;