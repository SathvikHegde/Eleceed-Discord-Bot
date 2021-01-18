module.exports = {
    name: 'giwook',
    description: "this is a giwook command!",
    execute(message, args, Discord){
        const giwookembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Giwook Jang')
        .addFields(
            {name:'**About**', value:'He is the instructor of the unaffiliated awakeners at the Awakened Academy. He is a member of the group Baekho and he is one of the top 20 ranking awakeners in South Korea.'},
            {name:'**Personality**', value:'Giwook Jang is shown to be a strict instructor. He coldly disagreed with one of his students who complained about the poor treatment towards the independent awakeners. However, Giwook also seems to show deep concern and care for the independent students. He strongly objected when the Academy schedules a spar between the affiliated and unaffiliated awakeners.'},
            {name:'**Abilities and Fighting Prowess**', value:'His exact abilities are unknown however he is considered to be one of the top 20 awakeners in Korea.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/2/29/Giwookjang.jpg/revision/latest?cb=20200818015715')
        message.channel.send(giwookembed);
    }
}