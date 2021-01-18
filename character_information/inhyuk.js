module.exports = {
    name: 'inhyuk',
    description: "this is a inhyuk command!",
    execute(message, args, Discord){
        const inhyukembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Inhyuk Goo')
        .addFields(
            {name:'**About**', value:'His main ability is wind manipulation. He is the right hand man of the leader of the Shinhwa Association Jiyoung Yoo.'},
            {name:'**Personality**', value:'Inhyuk is a very responsible individual who cares greatly about members in his organization as well as his friends. He has shown to love cats as he often tries to butter up Kaydens cat form with high-end treats.'},
            {name:'**Abilities and Fighting Prowess**', value:'Inhyuks main ability is aerokinesis. As he is in the top 20 of awakeners in Korea, he has very strong abilities and fighting prowess.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/2/2c/New_inhyuk_pfp.jpg/revision/latest?cb=20200607020804')
        message.channel.send(inhyukembed);
    }
}