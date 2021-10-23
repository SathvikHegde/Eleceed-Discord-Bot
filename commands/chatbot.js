const cleverbot = require("cleverbot-free");
module.exports = {
    name: 'talk',
    alias: ["t"],
    cooldown: 1,
    description: "talk with AI using cleverbot api!",
    execute(message, args, cmd, client, Discord){
        const say = args.join(" ");
        cleverbot(say).then(response => message.channel.send(response));
    }
}
