module.exports = {
    name: 'eval',
    alias: [],
    cooldown: 1,
    description: ".......eval.......",
    execute(message, args, cmd, client, Discord){
        if(message.author.id !== '531358468989517856') return message.reply('Only PeePee can use this command');
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
        
        function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
    }
}