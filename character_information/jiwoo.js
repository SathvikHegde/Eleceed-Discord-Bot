module.exports = {
    name: 'jiwoo',
    description: "this is a jiwoo command!",
    execute(message, args, Discord){
        const jiwooembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jiwoo Seo')
        .addFields(
            {name:'**About**', value:'He is a very bright and kind person who will go out of his way to help the people around him. His main ability is super speed. Hes shown to have a bit of Kaydens electrical ability after he lent him his powers during the fight with the pseudo-awakened cat. He is an independent awakener. He is currently attending the Awakened Academy during his summer break.'},
            {name:'**Personality**', value:'Jiwoo Seo is a very compassionate, warm-hearted softie who often shows mercy . He cant look away whenever there is a problem in front of him and strives to help others. He is very social and cares a lot about the people and cats around him. Contrary to his looks, he is competitive and hates losing. He will persistently see a fight through until the very end. Even when hes knocked down, he will get back up again.'},
            {name:'**Abilities and Fighting Prowess**', value:'Jiwoo Seos main ability is his super speed which he has greatly strengthened from his use of force control. Due to this ability, he also has heightened reflexes, good cognitive abilities, and dynamic vision. He is very talented and is able to develop his powers very quickly, which even surprises Kayden, the self-proclaimed genius. Due to Kaydens mentorship, Jiwoo is somewhat adept at fighting and observing the opponent. He is also a bit of a strategist when fighting. Currently, he can use his speed at a very high level for about six seconds. He can very fine control over his ability and can isolate his power into one part of his body for a very powerful blow.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/e/e8/Excited_jiwoo.jpg/revision/latest/scale-to-width-down/619?cb=20200519214517')
        message.channel.send(jiwooembed);
    }
}