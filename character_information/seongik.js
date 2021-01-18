module.exports = {
    name: 'seongik',
    description: "this is a seongik command!",
    execute(message, args, Discord){
        const seongikembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Seongik Han')
        .addFields(
            {name:'**About**', value:'He is the principal of the Awakened Academy and was once called the strongest awakened one in the country.  He was evaluated to be approximately 50th ranker in the globe. Seongik once rivaled Kayden Break, but only to be defeated by him. Astonished by Kayden being so powerful without any training or affiliation, he has chosen to retire, giving up everything including his title as the strongest one in the country, only to become strong. Although retired, he states that the CEO of Baekho is currently his pupil.'},
            {name:'**Abilities and Fighting Prowess**', value:'Seongiks former title, "the Strongest Awakened One in the Country", demonstrates just how strong Seongik is. For him to have earned that title, he must be very powerful. He states that like Jiwoo, he engages in close range combat with his enhanced physical state.'},
            {name:'**Trivia**', value:'Seongik Han loves cats and the old guy who appears in KFC is actually him!😉'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/c/c6/Seongik_Han_Portrait.png/revision/latest/scale-to-width-down/619?cb=20200804025056')
        message.channel.send(seongikembed);
    }
}