module.exports = {
    name: 'drdelein',
    description: "this is a drdelein command!",
    execute(message, args, Discord){
        const drdeleinembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Dr. Delein')
        .addFields(
            {name:'**About**', value:'He is Wooins mentor and his ability is telekinesis. He experiments on animals to figure out a way to awaken them.'},
            {name:'**Personality**', value:'Dr. Delein is a very cruel individual. He has no qualms in killing others who get in the middle of his experiments and killing animals for the sake of his research.Though he is quite ruthless, he also cares greatly for Wooin, even if he has a twisted way of showing his care.'},
            {name:'**Abilities and Fighting Prowess**', value:'Dr. Deleins main ability is telekinesis. His manipulation of his ability is much stronger than Wooins. However Dr. Delein is considered to be weaker than the top ranks of Korea as shown when he was unable to fight against the Awakened Union and Kayden.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/5/5e/Dr_delein.jpg/revision/latest?cb=20200605071223')
        message.channel.send(drdeleinembed);
    }
}