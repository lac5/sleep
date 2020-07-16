#!/usr/bin/env node
const { sleep } = require('./index.js');
const min = Math.min(process.argv[2], process.argv[3]) * 1000;
const max = Math.max(process.argv[2], process.argv[3]) * 1000;
sleep(Math.random() * (max - min) + min);
