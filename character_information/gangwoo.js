module.exports = {
    name: 'gangwoo',
    description: "this is a gangwoo command!",
    execute(message, args, Discord){
        const gangwooembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Gangwoo Choi')
        .addFields(
            {name:'**About**', value:'He is an independent awakener who is currently attending the Awakened Academy along with Jiwoo Seo. His ability is super strength and is categorized as a physical power like Jiwoos.'},
            {name:'**Personality**', value:'Gangwoo Choi is a bit arrogant and a bit selfish. He wont hesitate to fight against a girl and injure her. He is also a bit scared of those he deems as tough.'},
            {name:'**Abilities and Fighting Prowess**', value:'Gangwoo Chois ability is super strength and he is mainly a close ranged fighter. He can easily lift around 200 pounds. He is not that experienced in fighting other awakeners.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/1b/Gangwoo_Choi.png/revision/latest?cb=20200915042729')
        message.channel.send(gangwooembed);
    }
}