module.exports = {
    name: 'ping',
    alias: ['pong','pi'],
    cooldown: 1,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms. `);
    }
}