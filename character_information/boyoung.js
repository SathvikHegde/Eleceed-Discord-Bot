module.exports = {
    name: 'boyoung',
    description: "this is a boyoung command!",
    execute(message, args, Discord){
        const boyoungembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Boyoung Choi')
        .addFields(
            {name:'**About**', value:'She is a friend of Jaehyuk Lee and one of the awakeners that the Shinhwa Association is sending to the Awakened Academy.'},
            {name:'**Personality**', value:'Boyoung seems to be very wary of Jisuk due to the fact that he is quite reckless and strong. She does show a very cheerful persona, although it seems like she is cunning and sly.'},
            {name:'**Abilities and Fighting Prowess**', value:'It is be assumed that she is roughly at the same level as Jaehyuk as she was chosen by the Shinhwa Association to participate in the Awakened Academy. It can also be assumed that her ability is Aerokinesis like the rest of the members of Shinhwa.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/e/e5/Boyoung_choi.jpg/revision/latest?cb=20200623011604')
        message.channel.send(boyoungembed);
    }
}