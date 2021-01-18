module.exports = {
    name: 'jeonjsu',
    description: "this is a jeonjsu command!",
    execute(message, args, Discord){
        const jeonjsuembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Jeongsu Lee')
        .addFields(
            {name:'**About**', value:'He is an independent awakener. He has a psychic ability that involves super strength. He is recruited into the Awakened Academy by an organization, Baekdu.'},
            {name:'**Personality**', value:'Jeongsu Lee is quite an aggressive person and strives to be noticed by the other organizations as shown when he remarks that Jiwoo looks like a sissy and thinks he will be mostly noticed by the organizations. His goal is to be part of an awakened organization so he attempts to demonstrate his potential. His desperation to join an organization explains his obedience to Sucheon and the other students of Baekdu who constantly bullies him. But as Jiwoo stands up for Jeongsu against Sucheon, he begins to open his heart to Jiwoo and the rest of his peers as a friend.'},
            {name:'**Abilities and Fighting Prowess**', value:'Jeongsus ability involves super strength and has a distinct green aura around it. He is not very proficient in using it and it also doesnt have a lot of power. He is also very slow to use it. He can use his ability like a normal psychic user where he can shoot out green burst of power or concentrate his energy in his fists for close combat.'}

        )
        .setImage('https://vignette.wikia.nocookie.net/eleceed/images/9/92/Jeongsu_lee.jpg/revision/latest/scale-to-width-down/620?cb=20200804033636')
        message.channel.send(jeonjsuembed);
    }
}