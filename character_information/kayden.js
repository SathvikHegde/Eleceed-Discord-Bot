module.exports = {
    name: 'kayden',
    description: "this is a kayden command!",
    execute(message, args, Discord){
        const kaydenembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Kayden')
        .addFields(
            {name:'**About**', value:'He is now a cat that can turn back into his human form once he has recovered enough power. He is one of the strongest of the awakened ones as he is infamously powerful and considered one of the greats. His main ability is electronic manipulation, though he can also transform into a cat and use the space isolation power. Currently, he is living with Jiwoo as he recovers his power and energy. He is teaching Jiwoo about the awakened world and acting as his mentor and coach.'},
            {name:'**Personality**', value:'Kayden is a very ruthless and cautious individual who enjoys fighting others and constantly seeks out strong opponents. Before meeting Jiwoo, he was a very lonely person. After meeting Jiwoo, he became a somewhat caring teacher towards Jiwoo and makes effort to protect Jiwoo and his friends. Kayden is also very confident and arrogant often referring to himself in third person to emphasize his greatness.'},
            {name:'**Abilities and Fighting Prowess**', value:'**Electrokinesis:** As his main ability, Kayden is able to wield electricity by his will. He can exert tremendous force of electric from his hand, or rain down a heavy lightning strike from the sky.  󠀀󠀀   󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 **Spacial Isolation**: Kayden has the ability to isolate the space of which he is in. With one snap of a finger, he can use his electrokinesis ability to perform a quick spacial isolation 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀 **Cat Punch**: This is a special move developed by Kayden to effectively hit opponents while in cat form. Kayden had extensively researched how to efficiently move his power around his body in cat form and developed this special move by viewing how cats attacked each other. It is quite effective against his opponents.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/0/02/Kayden_break.jpg/revision/latest/scale-to-width-down/619?cb=20200519184912')
        message.channel.send(kaydenembed);
    }
}