const config = require('../config.json')
module.exports = (client) => {
    if(client.guilds.size >= 2400) {
        console.log(`Running on ${client.guilds.size} guilds. Consider sharding.`)
    }
    if(client.guilds.size >= 2500) {
        console.log(`Running on ${client.guilds.size} guilds. You must shard.`)
    }
    else {
        console.log(`Running on ${client.guilds.size} guilds.`)
    }
    setInterval(() => {
        const statuses = config.modules.activities;
        const index = Math.floor(Math.random() * statuses.length);
        client.user.setActivity(statuses[index]);
    }, 30000)
}