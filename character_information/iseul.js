module.exports = {
    name: 'iseul',
    description: "this is a iseul command!",
    execute(message, args, Discord){
        const iseulembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Iseul Ju')
        .addFields(
            {name:'**About**', value:'She is the student representative of Mir, an organization made up of awakeners that specialize in controlling animals. Her ability is also animal control. She is currently attending the Awakened Academy.'},
            {name:'**Personality**', value:'Iseul Ju at first glance seems like a very cold person who is also quite assertive. When she first met Jiwoo Seo and Kayden in cat form, she didnt hesitate to use her powers to control Kayden to become her pet as she liked how cute Kaydens cat form was. When she realized that her powers didnt work on Kayden, she assumed that Jiwoo also had animal controlling abilities and was very forward in her invitation to Jiwoo for him to join Mir. However, Iseul Ju is actually very shy and blushes often whenever she is around Jiwoo Seo. She also likes to hide around bushes with her dog to follow Jiwoo whenever he is walking Kayden around the Awakened Academy.'},
            {name:'**Abilities and Fighting Prowess**', value:'Iseul Jus ability is in controlling animals and she is quite powerful in that regard.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/a/a3/Iseul_Ju.png/revision/latest/scale-to-width-down/619?cb=20210112031300')
        message.channel.send(iseulembed);
    }
}