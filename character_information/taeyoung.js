module.exports = {
    name: 'taeyoung',
    description: "this is a taeyoung command!",
    execute(message, args, Discord){
        const taeyoungembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Taeyoung Ki')
        .addFields(
            {name:'**About**', value:'He is an independent awakener. His ability is Analysis. He is currently attending the Awakened Academy.'},
            {name:'**Personality**', value:'Taeyoung is very timid and is not very confident of himself. He does not talk much with the other independent awakeners other than Jeongsu Lee. However, he does have some pride as an independent awakener. He refuses to go down without a fight. For example, he goaded Sooae Choo into hitting him with her awakened power just to show the other awakeners that he could try.'},
            {name:'**Abilities and Fighting Prowess**', value:'Taeyoung has almost no fighting prowess or ability compared to other awakeners. His ability is analysis which is a non-combat power and is best used as a support ability.'}

        )
        .setImage('https://static.wikia.nocookie.net/eleceed/images/d/d0/TaeyoungKi.png/revision/latest/scale-to-width-down/619?cb=20201125031051')
        message.channel.send(taeyoungembed);
    }
}