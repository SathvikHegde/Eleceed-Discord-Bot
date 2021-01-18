module.exports = {
    name: 'jisuk',
    description: "this is a jisuk command!",
    execute(message, args, Discord){
        const jisukembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jisuk Yoo')
        .addFields(
            {name:'**About**', value:'He is the younger brother of Jiyoung Yoo, the CEO of Shinhwa Association. He is one of the most powerful, if not the most powerful, awakened person in his age group in South Korea. There are only 3 others teenage awakeners in Korea that are able to rival him, until Wooin showed up. Like his sister, his awakened power is aerokinesis. He is friends with Jiwoo and is currently attending the Awakened Academy.'},
            {name:'**Personality**', value:'Hes a rebellious person with a short temper. Hes arrogant and likes to fight, even though he rarely has to try to win. Hes lazy and likes to skip classes as he will not do things if he finds them bothersome. He doesnt listen to anyone except his sister. However after being friends with Jiwoo, he stands up for people he cares about and doesnt bully those he sees as weaker than him.'},
            {name:'**Abilities and Fighting Prowess**', value:'Jisuks main ability is wind manipulation. However Jisuk also has great combat ability as shown when he quickly dodges Jiwoos punches. He can manipulate the wind to move quickly like Jiwoo and can expel wind from his hands to fight his opponent. He has a great sense of perception and can analyze the enemy.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/1a/Pretty_jisuk.jpg/revision/latest/scale-to-width-down/620?cb=20200520203200')
        message.channel.send(jisukembed);
    }
}