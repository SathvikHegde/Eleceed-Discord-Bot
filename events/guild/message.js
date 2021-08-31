const cooldowns = new Map();
module.exports = (Discord, client, message) => {
    const prefix = '-';

    if(!message.content.startsWith(prefix) || message.author.bot) return;

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

    try{
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("ERROR! Something went wrong. Tell <@531358468989517856> to fix his code.");
        console.log(err);
    }

}
