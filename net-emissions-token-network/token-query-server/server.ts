import "reflect-metadata";
import express, { Application } from 'express';
import { createConnection } from "typeorm";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// sanity checks
const assertEnv = (key: string) => {
    if (!process.env[key]) {
        console.error(`${key} must be set as an environment variable, check your .env`)
        process.exit(1);
    }
}
// assertEnv('MORALIS_API_KEY')
assertEnv('LEDGER_EMISSION_TOKEN_CONTRACT_ADDRESS')
assertEnv('LEDGER_ETH_NETWORK')
assertEnv('LEDGER_ETH_JSON_RPC_URL')
assertEnv('PG_DB')

import dbConfig from './config/db.config';

// import synchronizer
import { fillBalances, fillTokens, truncateTable } from './controller/synchronizer';

import tokenRouter from './router/router';
import { subscribeEvent } from "./components/event.listener";
import { queryProcessing } from "./middleware/query.middle";

// for hardhat test!
import { synchronize } from "./middleware/sync.middle";

const app: Application = express();
const PORT: number | string = process.env.TOKEN_QUERY_PORT || 8000;
const corsOptions = {
    origin: "http://localhost:3000"
}

// middleware setting
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// for hardhat test sync
if(process.env.LEDGER_ETH_NETWORK === 'hardhat')
    app.use(synchronize);


// router
app.use('/', queryProcessing, tokenRouter);

/**
 * TODOs.
 * 1. must make sure sync issued tokens between fillToken & subscribeEvent!
 */
createConnection(dbConfig)
    .then(async (_connection) => {
        // add truncate
        try {
            await truncateTable();
        } catch (err) {
            console.error('An error occurred while truncating the table', err)
            throw err
        }
        let elapsed = 0;
        const started = Date.now();
        console.log('--- Synchronization started at: ', new Date().toLocaleString());
        let lastBlock = 0;
        try {
            lastBlock = await fillTokens();
            console.log('--first last block: ', lastBlock);
        } catch (err) {
            console.error('An error occurred while fetching the tokens', err)
            throw err
        }
        try {
            await fillBalances(lastBlock);
        } catch (err) {
            console.error('An error occurred while filling balances', err)
            throw err
        }

        elapsed = Date.now() - started;
        console.log(`elapsed ${elapsed / 1000} seconds.\n`);
        
        try {
            // for hardhat
            if(process.env.LEDGER_ETH_NETWORK === 'bsctestnet') {
                subscribeEvent(lastBlock);
            }
        } catch (err) {
            console.error('An error occurred while setting up the blockchain event handlers', err)
            throw err
        }
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}\n`)
        });
    })
    .catch((err) => {
        console.log("Fatal Error: ", err);
        process.exit(1);
    });
