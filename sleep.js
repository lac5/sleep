#!/usr/bin/env node
const { sleep } = require('./index.js');
sleep(Number(process.argv[2]) * 1000);
