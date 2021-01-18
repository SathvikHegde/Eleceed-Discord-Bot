module.exports = {
    name: 'kleinbrothers',
    description: "this is a kleinbrothers command!",
    execute(message, args, Discord){
        const kleinbrothersembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Klein Brothers')
        .addFields(
            {name:'**About**', value:'They are awakeners who have an ability related to pyrokinesis. One brother is named Duran Klein while the other is unnamed. They are extremely dangerous and are considered to be one of the infamous international criminals. They are currently imprisoned by the Awakened Union.'},
            {name:'**Personalities**', value:'The Klein Brothers are very ruthless and cruel. They will not hesitate to kill innocent people to keep their identity a secret. They also care a lot about profits, as they often talk about selling the young awakeners. Duran Klein in particular has a crazy personality. He seems much more insane than his brother because he seems to enjoy toying with his opponents and taunting them. The unnamed Klein brother on the other hand is also quite cruel but he seems to be a bit more cautious of his actions.'},
            {name:'**Abilities and Fighting Prowess**', value:'The Klein Brothers both have abilities related to fire. Duran Klein can create fireballs in the air and shoot them towards his opponents for long-ranged attacks. He can make huge explosions this way and has deadly firepower and aim. He can also concentrate all his power into his fingers to torture people for information. The unnamed Klein brother on the other hand has fire than covers his hands for short ranged attacks. He can explode anything he touches. His fire comes out in beams/waves rather than fireballs.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/9/9f/KleinBrothers_pfp.jpeg/revision/latest/scale-to-width-down/620?cb=20200613091137')
        message.channel.send(kleinbrothersembed);
    }
}