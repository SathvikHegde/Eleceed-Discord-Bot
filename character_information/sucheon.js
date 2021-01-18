module.exports = {
    name: 'sucheon',
    description: "this is a sucheon command!",
    execute(message, args, Discord){
        const sucheonembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Sucheon Kang')
        .addFields(
            {name:'**About**', value:'He is the student representative of the Baekdu organization and is considered to be one of the rare few in his age group that have talent and power on par with Jisuk Yoo. He is currently attending the Awakened Academy.'},
            {name:'**Personality**', value:'Sucheon is extremely confident in his abilities to the point of arrogance and takes a lot of pride in his awakened group, Baekdu. His behavior is often bully-like as he often verbally and physically abuses Jeongsu simply because the latter is an unaffiliated awakened one hoping to join his group at all costs. However, his abusive behavior is possibly originated from his own grandfather, the former CEO and the current elder of Baekdu, who has been abusing and pressuring him to be the strongest and most perfect.'},
            {name:'**Abilities and Fighting Prowess**', value:'Gyrokinesis: Sucheon, like the other academy members from Baekdu, is able to manipulate gravity. His basic technique of offense is to increase the gravitational acceleration downwards and subdue the opponent by weighing down heavy pressure. Sucheon can manipulate gravity in other ways. He can lift the opponent upwards and drop him down the ground in fast speed. He can also concentrate the gravity into the center of the opponents body and make it feel as if the body is being crushed inside.'}

        )
        .setImage('https://static.wikia.nocookie.net/eleceed/images/7/74/Sucheon.jpeg/revision/latest/scale-to-width-down/619?cb=20201023082000')
        message.channel.send(sucheonembed);
    }
}