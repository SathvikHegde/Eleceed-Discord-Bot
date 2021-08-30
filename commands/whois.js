module.exports = {
    name: "whois",
    alias: ['wi'],
    cooldown: 5,
    description: "know about everyone",
    execute(message, args, cmd, client, Discord){
        if(args[0] == 'boyoung' || args[0] == 'boyoungchoi'){
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
        }else if(args[0] == 'drdelein' || args[0] == 'delein'){
            const drdeleinembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Dr. Delein')
            .addFields(
                {name:'**About**', value:'He is Wooins mentor and his ability is telekinesis. He experiments on animals to figure out a way to awaken them.'},
                {name:'**Personality**', value:'Dr. Delein is a very cruel individual. He has no qualms in killing others who get in the middle of his experiments and killing animals for the sake of his research.Though he is quite ruthless, he also cares greatly for Wooin, even if he has a twisted way of showing his care.'},
                {name:'**Abilities and Fighting Prowess**', value:'Dr. Deleins main ability is telekinesis. His manipulation of his ability is much stronger than Wooins. However Dr. Delein is considered to be weaker than the top ranks of Korea as shown when he was unable to fight against the Awakened Union and Kayden.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/5/5e/Dr_delein.jpg/revision/latest?cb=20200605071223')
            message.channel.send(drdeleinembed);
        }else if(args[0] == 'gangwoo' || args[0] == 'gangwoochoi'){
            const gangwooembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Gangwoo Choi')
            .addFields(
                {name:'**About**', value:'He is an independent awakener who is currently attending the Awakened Academy along with Jiwoo Seo. His ability is super strength and is categorized as a physical power like Jiwoos.'},
                {name:'**Personality**', value:'Gangwoo Choi is a bit arrogant and a bit selfish. He wont hesitate to fight against a girl and injure her. He is also a bit scared of those he deems as tough.'},
                {name:'**Abilities and Fighting Prowess**', value:'Gangwoo Chois ability is super strength and he is mainly a close ranged fighter. He can easily lift around 200 pounds. He is not that experienced in fighting other awakeners.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/1b/Gangwoo_Choi.png/revision/latest?cb=20200915042729')
            message.channel.send(gangwooembed);
        }else if(args[0] == 'giwook' || args[0] == 'giwookjang'){
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
        }else if(args[0] == 'inhyuk' || args[0] == 'inhyukgoo'){
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
        }else if(args[0] == 'iseul' || args[0] == 'iseulju'){
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
        }else if(args[0] == 'jaehyuk' || args[0] == 'jaehyuklee'){
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
        }else if(args[0] == 'jeongsu' || args[0] == 'jeongsulee'){
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
        }else if(args[0] == 'jihye' || args[0] == 'jihyelee'){
            const jihyeembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Jihye Lee')
            .addFields(
                {name:'**About**', value:'She is an independent awakener who attends the Awakened Academy. she was originally not involved in the Awakened World as she had never actually used her powers on another awakener until she attended the Academy.'},
                {name:'**Personality**', value:'Jihye has a bit of a competitive attitude when fighting but does care about people somewhat. She apologizes to people shes badly hurt and she doesnt hesitate to smile at people. She bluffs about her powers in order to make it seem a bit more powerful. She is insecure about her power in front of people she knows are stronger than her.'},
                {name:'**Abilities and Fighting Prowess**', value:'She has poor fighting abilities and barely any combat power as shown when she was unable to block against Jiwoo Seos punch. Her ability is also limited to keeping a person up for a small amount of time however she can lift a person up around 65 feet. Her ability is psychokinesis.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/f/ff/Jihye_Lee.png/revision/latest/scale-to-width-down/620?cb=20200902031349')
            message.channel.send(jihyeembed);
        }else if(args[0] == 'jisuk' || args[0] == 'jisukyoo'){
            const jisukembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Jisuk Yoo')
            .addFields(
                {name:'**About**', value:'He is the younger brother of Jiyoung Yoo, the CEO of Shinhwa Association. He is one of the most powerful, if not the most powerful, awakened person in his age group in South Korea. There are only 3 others teenage awakeners in Korea that are able to rival him, until Wooin showed up. Like his sister, his awakened power is aerokinesis. He is friends with Jiwoo and is currently attending the Awakened Academy.'},
                {name:'**Personality**', value:'Hes a rebellious person with a short temper. Hes arrogant and likes to fight, even though he rarely has to try to win. Hes lazy and likes to skip classes as he will not do things if he finds them bothersome. He doesnt listen to anyone except his sister. However after being friends with Jiwoo, he stands up for people he cares about and doesnt bully those he sees as weaker than him.'},
                {name:'**Abilities and Fighting Prowess**', value:'Jisuks main ability is wind manipulation. However Jisuk also has great combat ability as shown when he quickly dodges Jiwoos punches. He can manipulate the wind to move quickly like Jiwoo and can expel wind from his hands to fight his opponent. He has a great sense of perception and can analyze the enemy.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/1a/Pretty_jisuk.jpg/revision/latest/scale-to-width-down/620?cb=20200520203200')
            message.channel.send(jisukembed);
        }else if(args[0] == 'jiyoung' || args[0] == 'jiyoungyoo'){
            const jiyoungembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Jiyoung Yoo')
            .addFields(
                {name:'**About**', value:'She is the chairwoman of Shinhwa Association, an organization made up of awakeners that reside over the territory where Jiwoo lives. Not only can she control wind, but she can also use spacial isolation. As the leader of Shinhwa, Jiyoung Yoos responsibility is to teach new awakened ability users the basics and provide the most basic levels of support as well as keep the awakened world hidden from the normal world. She is the older sister of Jisuk Yoo.'},
                {name:'**Personality**', value:'Jiyoung is quiet, calm and collected as most people tend to respect her. She is also quite serious and intelligent. Normally she can keep her cool, as at first she seemed quite emotionless (although she is shown to have a soft spot for Jiwoo.) An example of this is, when some of Shinhwas members questioned Jiwoos ability, she got defensive on Jiwoos behalf.'},
                {name:'**Abilities and Fighting Prowess**', value:'As most people in Shinhwa, Jiyoung has some type of aerokinesis ability. She is seen controlling wind.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/1/11/Jiyoung_pfp.jpg/revision/latest/scale-to-width-down/619?cb=20200520205147')
            message.channel.send(jiyoungembed);
        }else if(args[0] == 'jookyung' || args[0] == 'jookyungkim'){
            const jookyungembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Jookyung Kim')
            .addFields(
                {name:'**About**', value:'She is a member of Mir. She has a psychic ability called Mind Control which is a subset of Mirs ability. She is currently attending the Awakened Academy as a student representative along with Iseul Ju.'},
                {name:'**Personality**', value:'Jookyung Kim is a bit of a trickster as shown by her constant smirks when she fought Gangwoo Choi.'},
                {name:'**Abilities and Fighting Prowess**', value:'Her ability is mind control which means that she can control humans and force them to experience illusions within their mind. When her opponents are being mind controlled, they lose the ability to do anything and can only stand there. She has not yet shown any fighting abilities.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/a/a7/Jookyung_Kim.png/revision/latest/scale-to-width-down/620?cb=20201125034255')
            message.channel.send(jookyungembed);
        }else if(args[0] == 'kayden' || args[0] == 'kaydenbreak'){
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
        }else if(args[0] == 'klein' || args[0] == 'kleinbrothers'){
            const kleinbrothersembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Klein Brothers')
            .addFields(
                {name:'**About**', value:'They are awakeners who have an ability related to pyrokinesis. One brother is named Duran Klein while the other is unnamed. They are extremely dangerous and are considered to be one of the infamous international criminals. They are currently imprisoned by the Awakened Union.'},
                {name:'**Personalities**', value:'The Klein Brothers are very ruthless and cruel. They will not hesitate to kill innocent people to keep their identity a secret. They also care a lot about profits, as they often talk about selling the young awakeners. Duran Klein in particular has a crazy personality. He seems much more insane than his brother because he seems to enjoy toying with his opponents and taunting them. The unnamed Klein brother on the other hand is also quite cruel but he seems to be a bit more cautious of his actions.'},
                {name:'**Abilities and Fighting Prowess**', value:'The Klein Brothers both have abilities related to fire. Duran Klein can create fireballs in the air and shoot them towards his opponents for long-ranged attacks. He can make huge explosions this way and has deadly firepower and aim. He can also concentrate all his power into his fingers to torture people for information. The unnamed Klein brother on the other hand has fire than covers his hands for short ranged attacks. He can explode anything he touches. His fire comes out in beams/waves rather than fireballs.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/9/9f/KleinBrothers_pfp.jpeg/revision/latest/scale-to-width-down/620?cb=20200613091137')
            message.channel.send(kleinbrothersembed);
        }else if(args[0] == 'seongha' || args[0] == 'seonghapark'){
            const seonghaembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Seongha Park')
            .addFields(
                {name:'**About**', value:'He is an agent belonging to the Awakened Union. He invited Wooin into the Union after seeing the boy’s ability and skills. His awakened ability is cryokinesis. He is a strong awakener as he is considered to be in the top 20 ranks of powerful awakeners in Korea.'},
                {name:'**Personality**', value:'Seongha is a responsible individual with a strong sense of justice. When Inhyuk Goo saved one of Park’s agents, Park did not hesitate to awkwardly thank him.'},
                {name:'**Abilities and Fighting Prowess**', value:'**Cryokinesis:** Seongha is able to project ice shards towards the opponent. He can also generate mass scale of ice points around him, severely wounding any opponent around him.                         **Spacial Isolation:** With his cryokinesis ability, Seongha can perform a spacial isolation.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/0/0e/Seongha_pfp.jpg/revision/latest/scale-to-width-down/620?cb=20200607020647')
            message.channel.send(seonghaembed);
        }else if(args[0] == 'seongik' || args[0] == 'seongikhan' || args[0] == 'han' || args[0] == 'kfcdean'){
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
        }else if(args[0] == 'sooae' || args[0] == 'sooaechoo'){
            const sooaeembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Sooae Choo')
            .addFields(
                {name:'**About**', value:'She is a member of an organization called Halla. She has a psychic ability that allows her to condense her awakened power into a sphere to attack. She is currently attending the Awakened Academy as a student representative of Halla.'},
                {name:'**Personality**', value:'Sooae Choo is quite mild mannered. She hesitates to hurt other awakeners with her power if she sees that they are much weaker than her but will do so if asked.'},
                {name:'**Abilities and Fighting Prowess**', value:'Sooae Choo has some experience in fighting and has great combat ability as she was chosen to be one of Hallas student representatives. She is much weaker than Jisuk Yoo and Subin Lee though. Her ability is Hallas signature power which is the ability to condense her awakened power into a sphere.'}
    
            )
            .setImage('https://vignette.wikia.nocookie.net/eleceed/images/4/4e/Sooae_Choo.png/revision/latest/scale-to-width-down/620?cb=20201125032529')
            message.channel.send(sooaeembed);
        }else if(args[0] == 'subin' || args[0] == 'subinlee'){
            const subinembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Subin Lee')
            .addFields(
                {name:'**About**', value:'She is the granddaughter of the Awakened Union leader. She is on par with Jisuk in terms of power, making her quite strong. She is friends with Jisuk, Jiwoo, and Wooin. Her ability is cryokinesis. She is currently attending the Awakened Academy.'},
                {name:'**Personality**', value:'She has a short temper, but doesnt lay her hands on people for no reason. However, she is quick to brawl with Jisuk and the smallest things tick her off. She is also a very confident individual due to her high combat ability. She is also very proud to be in the Awakened Union as shown when she had a duel with Wooin just because he did not immediately accept Parks invitation to join the Union. She is also very suspicious of others. When Jiwoo was kind to her, she was very confused and wondered why a complete stranger would say hi to her. However she is also protective of her friends and enjoys spending time with them. When Jiwoo invited her to his house the day before they went to the academy, she agreed even though she didnt have to and didnt know him that well.'},
                {name:'**Abilities and Fighting Prowess**', value:'**Cryokinesis:** Subin has the ability to manipulate ice. She can generate ice shards and shoot them at the opponent. She can also immediately generate ice walls to defend herself, and a pair of ice knives for close combat.'}
    
            )
            .setImage('https://static.wikia.nocookie.net/eleceed/images/3/37/Lee_subin.jpg/revision/latest/scale-to-width-down/619?cb=20200520210050')
            message.channel.send(subinembed);
        }else if(args[0] == 'sucheon' || args[0] == 'sucheonkang'){
            const sucheonembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Sucheon Kang')
            .addFields(
                {name:'**About**', value:'He is the student representative of the Baekdu organization and is considered to be one of the rare few in his age group that have talent and power on par with Jisuk Yoo. He is currently attending the Awakened Academy.'},
                {name:'**Personality**', value:'Sucheon is extremely confident in his abilities to the point of arrogance and takes a lot of pride in his awakened group, Baekdu. His behavior is often bully-like as he often verbally and physically abuses Jeongsu simply because the latter is an unaffiliated awakened one hoping to join his group at all costs. However, his abusive behavior is possibly originated from his own grandfather, the former CEO and the current elder of Baekdu, who has been abusing and pressuring him to be the strongest and most perfect.'},
                {name:'**Abilities and Fighting Prowess**', value:'Gyrokinesis: Sucheon, like the other academy members from Baekdu, is able to manipulate gravity. His basic technique of offense is to increase the gravitational acceleration downwards and subdue the opponent by weighing down heavy pressure. Sucheon can manipulate gravity in other ways. He can lift the opponent upwards and drop him down the ground in fast speed. He can also concentrate the gravity into the center of the opponents body and make it feel as if the body is being crushed inside.'}
    
            )
            .setImage('https://static.wikia.nocookie.net/eleceed/images/7/74/Sucheon.jpeg/revision/latest/scale-to-width-down/619?cb=20201023082000')
            message.channel.send(sucheonembed);
        }else if(args[0] == 'taeyoung' || args[0] == 'taeyoungki'){
            const taeyoungembed = new Discord.MessageEmbed()
            .setColor('#0062ff')
            .setTitle('Taeyoung Ki')
            .addFields(
                {name:'**About**', value:'He is an independent awakener. His ability is Analysis. He is currently attending the Awakened Academy.'},
                {name:'**Personality**', value:'Taeyoung is very timid and is not very confident of himself. He does not talk much with the other independent awakeners other than Jeongsu Lee. However, he does have some pride as an independent awakener. He refuses to go down without a fight. For example, he goaded Sooae Choo into hitting him with her awakened power just to show the other awakeners that he could try.'},
                {name:'**Abilities and Fighting Prowess**', value:'Taeyoung has almost no fighting prowess or ability compared to other awakeners. His ability is analysis which is a non-combat power and is best used as a support ability.'}
    
            )
            .setImage('https://static.wikia.nocookie.net/eleceed/images/d/d0/TaeyoungKi.png/revision/latest/scale-to-width-down/619?cb=20201125031051')
            message.channel.send(taeyoungembed);
        }else if(args[0] == 'wooin' || args[0] == 'wooinwoo'){
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
}