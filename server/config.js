'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: 'oka1kh.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'oka1kh', //update me
                password: 'Nhattien69999'  //update me
        }
        },
        options: {
        // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'PROFILE_DB',  //update me
            enableArithAbort: true,
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            }
        }
    }
}
