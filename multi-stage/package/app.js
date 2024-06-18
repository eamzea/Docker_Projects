const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log('Start');

cron.schedule('*/5 * * * * *', syncDB)
