module.exports = {
    name: 'wooin',
    description: "this is a wooin command!",
    execute(message, args, Discord){
        const wooinembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Wooin')
        .addFields(
            {name:'**About**', value:'He was Dr. Deleins student and is a classmate of Jiwoos. He has no last name that we know of and is an independent awakener. His ability is telekinesis. He is currently attending the Awakened Academy.'},
            {name:'**Background**', value:'As a child, Wooin grew up in an orphanage, hiding his power from others. But due to his awakener physiology, he was shown by others to have enhanced strength, reflexes, and healing factor compared to normal people. He was taken from the orphanage by unknown individuals, who secretly conducted human body experiments on him for the purpose of medical discovery. Wooin was eventually picked up by Dr. Delein, saving him from further experiments. He was taught how to use his powers by the professor and adopted his style of using telekinesis. They were always on the run and wandered from place to place, making Wooin switch schools constantly. He wasnt able to make friends due of this, until he met Jiwoo.'},
            {name:'**Personality**', value:'He is not very expressive and rarely smiles. Hes a quiet and cautious person, but will fight for his friends. He can be surprisingly stubborn and rebellious, which amuses Dr. Delein, who calls him a gentle and well-behaved kid. When questioned by the Union agent watching Wooin, he says that Wooin wouldve had a reason to act out and wouldnt do that without a good reason.'},
            {name:'**Abilities and Fighting Prowess**', value:'Wooin’s main ability is telekinesis. He can quickly immobilize his opponents by sending out black slashes of aura towards his opponents. He often attacks immediately after the fight starts, catching his opponent off guard. Wooins power is very strong and can seriously injure his opponents. His fighting and combat ability is around the same as Jisuks level.'}

        )
        .setImage('https://static.wikia.nocookie.net/eleceed/images/6/64/Wooin_pfp_maybe.jpg/revision/latest/scale-to-width-down/620?cb=20200520212719')
        message.channel.send(wooinembed);
    }
}