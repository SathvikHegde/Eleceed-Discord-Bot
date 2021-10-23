const User = require("../models/user.js");

module.exports = {
    name: 'leaderboard',
    alias: ['lb'],
    cooldown: 1,
    description: "See the top scorers of black cat game",
    execute(message, args, cmd, client, Discord){
        let embed = new Discord.MessageEmbed()
            .setTitle("**Black Cat Leaderboard**")
            .setFooter(`Requested by ${message.author.username}`);

            User.find({
                serverID: message.guild.id
              }).sort([
                ["totalpoints", "descending"]
              ]).exec((err, res) => {
                if(err) console.log(err);
            
                if(!res){
                  message.channel.send('This isnt supposed to happen. Fix your code PEEPEE!!')
                }else if(res.length < 10){
                  embed.setColor("BLURPLE");
                  for (i = 0; i < res.length; i++) {
                    if(i < 3){
                      let member = message.guild.members.fetch(res[i].userID) || "User Left";
                      if (member === "User Left") {
                        embed.addField(`:star2: ${i + 1}. ${member}`, `**Points**: ${res[i].totalpoints}`);
                      } else {
                        embed.addField(`:star2: ${i + 1}. ${res[i].userName}`, `**Points**: ${res[i].totalpoints}`);
                      }
                    }else{
                      let member = message.guild.members.fetch(res[i].userID) || "User Left";
                      if (member === "User Left") {
                        embed.addField(`:star: ${i + 1}. ${member}`, `**Points**: ${res[i].totalpoints}`);
                      } else {
                        embed.addField(`:star: ${i + 1}. ${res[i].userName}`, `**Points**: ${res[i].totalpoints}`);
                      }
                    }
                    
                  }
                }else{
                  embed.setColor("BLURPLE");
                  for (i = 0; i < 10; i++) {
                    if(i < 3){
                      let member = message.guild.members.fetch(res[i].userID) || "User Left";
                      if (member === "User Left") {
                        embed.addField(`:star2: ${i + 1}. ${member}`, `**Points**: ${res[i].totalpoints}`);
                      } else {
                        embed.addField(`:star2: ${i + 1}. ${res[i].userName}`, `**Points**: ${res[i].totalpoints}`);
                      }
                    }else{
                      let member = message.guild.members.fetch(res[i].userID) || "User Left";
                      if (member === "User Left") {
                        embed.addField(`:star: ${i + 1}. ${member}`, `**Points**: ${res[i].totalpoints}`);
                      } else {
                        embed.addField(`:star: ${i + 1}. ${res[i].userName}`, `**Points**: ${res[i].totalpoints}`);
                      }
                    }
                    
                  }
                }
                embed.setTimestamp();
    
                message.channel.send(embed);
              })
    }
}