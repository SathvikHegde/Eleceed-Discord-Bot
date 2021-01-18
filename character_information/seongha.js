module.exports = {
    name: 'seongha',
    description: "this is a seongha command!",
    execute(message, args, Discord){
        const seonghaembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Seongha Park')
        .addFields(
            {name:'**About**', value:'He is an agent belonging to the Awakened Union. He invited Wooin into the Union after seeing the boy’s ability and skills. His awakened ability is cryokinesis. He is a strong awakener as he is considered to be in the top 20 ranks of powerful awakeners in Korea.'},
            {name:'**Personality**', value:'Seongha is a responsible individual with a strong sense of justice. When Inhyuk Goo saved one of Park’s agents, Park did not hesitate to awkwardly thank him.'},
            {name:'**Abilities and Fighting Prowess**', value:'**Cryokinesis:** Seongha is able to project ice shards towards the opponent. He can also generate mass scale of ice points around him, severely wounding any opponent around him.                         **Spacial Isolation:** With his cryokinesis ability, Seongha can perform a spacial isolation.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/0/0e/Seongha_pfp.jpg/revision/latest/scale-to-width-down/620?cb=20200607020647')
        message.channel.send(seonghaembed);
    }
}