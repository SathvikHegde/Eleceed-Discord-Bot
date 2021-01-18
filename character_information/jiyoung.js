module.exports = {
    name: 'jiyoung',
    description: "this is a jiyoung command!",
    execute(message, args, Discord){
        const jiyoungembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jiyoung Yoo')
        .addFields(
            {name:'**About**', value:'She is the chairwoman of Shinhwa Association, an organization made up of awakeners that reside over the territory where Jiwoo lives. Not only can she control wind, but she can also use spacial isolation. As the leader of Shinhwa, Jiyoung Yoos responsibility is to teach new awakened ability users the basics and provide the most basic levels of support as well as keep the awakened world hidden from the normal world. She is the older sister of Jisuk Yoo.'},
            {name:'**Personality**', value:'Jiyoung is quiet, calm and collected as most people tend to respect her. She is also quite serious and intelligent. Normally she can keep her cool, as at first she seemed quite emotionless (although she is shown to have a soft spot for Jiwoo.) An example of this is, when some of Shinhwas members questioned Jiwoos ability, she got defensive on Jiwoos behalf.'},
            {name:'**Abilities and Fighting Prowess**', value:'As most people in Shinhwa, Jiyoung has some type of aerokinesis ability. She is seen controlling wind.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/11/Jiyoung_pfp.jpg/revision/latest/scale-to-width-down/619?cb=20200520205147')
        message.channel.send(jiyoungembed);
    }
}