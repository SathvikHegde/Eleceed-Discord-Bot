const User = require("../models/user.js");

module.exports = {
    name: 'points',
    alias: ['point','totalpoints'],
    cooldown: 1,
    description: "Check your points for black cat game",
    execute(message, args, cmd, client, Discord){
        const target = message.author || message.mentions.users.first();

        User.findOne({
            userID: target.id
        }, (err, res) => {
            if(err) console.log(err);

            if(!res) return message.reply("You haven't played the game yet!")

            const embed = new Discord.MessageEmbed()
             .setDescription(`**${target.username}** has ${res.totalpoints} points.`)
             .setColor("BLURPLE")
            
            message.channel.send(embed);
        })
    }
}