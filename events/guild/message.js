const cooldowns = new Map();
const Words = require("../../models/words.js");
const User = require("../../models/user.js");

module.exports = async (Discord, client, message) => {
    const prefix = '-';
    if(message.author.bot) return;

    if(message.content.includes("%hug")) message.reply("Use `-hug` instead.");
    if(message.content.includes("%pat")) message.reply("Use `-pat` instead.");

    if(message.channel.id == "989501486096588840") {
        Words.findOne({
            words: message.content.toLowerCase()
        }, (err, wordres) => {
            if(err) console.log(err);

            if(wordres) {
                User.findOne({
                    userID: message.author.id
                }, async (err, userres) => {
                    if(err) console.log(err);

                    if(!userres) {
                        await message.delete();
                        const userDoc = new User({
                            userID: message.author.id,
                            wordsused: [message.content.toLowerCase()],
                            totalpoints: wordres.points,
                            serverID: message.guild.id,
                            userName: message.author.username
                        });
                        await userDoc.save().catch(err => console.log(err));

                        const embed = new Discord.MessageEmbed()
                         .setDescription(`You just scored ${wordres.points} points!`)
                         .setColor("GREEN")
                         .setImage(wordres.imageUrl);
                        return message.channel.send(`<@${message.author.id}>`, embed);

                    }else if(!userres.wordsused.includes(message.content.toLowerCase())) {
                        await message.delete();
                        const embed = new Discord.MessageEmbed()
                         .setDescription(`You just scored ${wordres.points} points!`)
                         .setColor("GREEN")
                         .setImage(wordres.imageUrl);
                        message.channel.send(`<@${message.author.id}>`, embed);

                        userres.totalpoints = userres.totalpoints + wordres.points;
                        userres.wordsused.push(message.content.toLowerCase());
                        await userres.save().catch(err => console.log(err));
                    } else {
                        message.delete();
                    }
                });
            }
        });
    }

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || 
                    client.commands.find(a => a.alias && a.alias.includes(cmd));

    if(!command) return;
    
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            const embed = new Discord.MessageEmbed()
            .setTitle(`You need to wait ${time_left.toFixed(1)} seconds before you can use ${command.name} again`)
            .setColor('RED')
            return message.reply(embed);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("ERROR! Something went wrong. Tell <@531358468989517856> to fix his code.");
        console.log(err);
    }

}
