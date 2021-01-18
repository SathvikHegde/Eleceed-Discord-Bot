module.exports = {
    name: 'jaehyuk',
    description: "this is a jayhyuk command!",
    execute(message, args, Discord){
        const jaehyukembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jaehyuk Lee')
        .addFields(
            {name:'**About**', value:'He is the son of Shinhwa Associations Chairman Lee. He is one of the members that Shinhwa is sending to the Awakened Academy. Jaehyuk was raised in Shinhwa as his father is one of the chairmen. Jaehyuk knew Jisuk Yoo when they were younger, but Jisuk doesnt recognize him. He is a close friend of Boyoung Choi.'},
            {name:'**Personality**', value:'Jaehyuk has a scheming personality, which is shown when he sent his people to investigate Jiwoo Seo; however, he also sucks up to his elders or people more powerful than him, like Jisuk and Jiyoung.'},
            {name:'**Abilities and Fighting Prowess**', value:'He has wind abilities which is a trait of people in Shinhwa. He can expel wind from his hands however his mastery is lower than Jisuks.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/a/af/Jaehyuk_booboo.jpg/revision/latest/scale-to-width-down/620?cb=20200609012551')
        message.channel.send(jaehyukembed);
    }
}