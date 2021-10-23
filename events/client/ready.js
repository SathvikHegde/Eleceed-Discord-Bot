const Word = require("../../models/words.js");

module.exports = () =>{
    console.log('Bot is Online!');
    /*const wordDoc = new Word({
        words: ["cat"],
        points: 5,
        imageUrl: "https://i.imgur.com/mXwGHIk.png"
    });
    wordDoc.save().catch(err => console.log(err));

    const wordDoc2 = new Word({
        words: ["kitten"],
        points: 5,
        imageUrl: "https://i.imgur.com/k6VmxZN.png"
    });
    wordDoc2.save().catch(err => console.log(err));

    const wordDoc3 = new Word({
        words: ["puss"],
        points: 5,
        imageUrl: "https://i.imgur.com/Gr6V0NC.png"
    });
    wordDoc3.save().catch(err => console.log(err));

    const wordDoc4 = new Word({
        words: ["pussycat", "feline"],
        points: 5,
        imageUrl: "https://i.imgur.com/qwVi2hH.png"
    });
    wordDoc4.save().catch(err => console.log(err));

    const wordDoc5 = new Word({
        words: ["tomcat","meow", "mauz", "miyav", "miav", "miyau", "mao", "meogre", "miaŭ", "ngiyaw", "mjá", "mňau", "knavili", "ņau", "nyav", "mi'au", "niaou", "nya", "yaong", "nyang", "mjau", "miau", "nyau", "myau", "ngiau", "mijav"],
        points: 5,
        imageUrl: "https://i.imgur.com/HSBG4Mt.png"
    });
    wordDoc5.save().catch(err => console.log(err));

    const wordDoc6 = new Word({
        words: ["paw", "claws"],
        points: 5,
        imageUrl: "https://i.imgur.com/7e4igY5.png"
    });
    wordDoc6.save().catch(err => console.log(err));

    const wordDoc7 = new Word({
        words: ["vet", "veterinary", "veterinarian", "collar", "toy", "neuter", "neutered"],
        points: 10,
        imageUrl: "https://i.imgur.com/Em94Bmh.png"
    });
    wordDoc7.save().catch(err => console.log(err));

    const wordDoc8 = new Word({
        words: ["milk", "fish", "tuna", "can cat food"],
        points: 10,
        imageUrl: "https://i.imgur.com/8vSSpiy.png"
    });
    wordDoc8.save().catch(err => console.log(err));

    const wordDoc9 = new Word({
        words: ["gato"],
        points: 10,
        imageUrl: "https://i.imgur.com/Kerjg9A.png"
    });
    wordDoc9.save().catch(err => console.log(err));

    const wordDoc10 = new Word({
        words: ["gremlin"],
        points: 10,
        imageUrl: "https://i.imgur.com/ca08QzO.png"
    });
    wordDoc10.save().catch(err => console.log(err));

    const wordDoc11 = new Word({
        words: ["feral cat"],
        points: 10,
        imageUrl: "https://i.imgur.com/aGpqp8P.png"
    });
    wordDoc11.save().catch(err => console.log(err));

    const wordDoc12 = new Word({
        words: ["house cat"],
        points: 10,
        imageUrl: "https://i.imgur.com/KxrFV4q.jpeg"
    });
    wordDoc12.save().catch(err => console.log(err));

    const wordDoc13 = new Word({
        words: ["wild cat"],
        points: 10,
        imageUrl: "https://i.imgur.com/1LPLaET.png"
    });
    wordDoc13.save().catch(err => console.log(err));

    const wordDoc14 = new Word({
        words: ["fluffy", "short hair", "long hair"],
        points: 10,
        imageUrl: "https://i.imgur.com/qoalYWS.png"
    });
    wordDoc14.save().catch(err => console.log(err));

    const wordDoc15 = new Word({
        words: ["mouser"],
        points: 15,
        imageUrl: "https://i.imgur.com/PNiLjAq.png"
    });
    wordDoc15.save().catch(err => console.log(err));

    const wordDoc16 = new Word({
        words: ["fur baby"],
        points: 15,
        imageUrl: "https://i.imgur.com/lH0XOuB.png"
    });
    wordDoc16.save().catch(err => console.log(err));

    const wordDoc31 = new Word({
        words: ["fur kid"],
        points: 15,
        imageUrl: "https://i.imgur.com/4Rggwcv.png"
    });
    wordDoc31.save().catch(err => console.log(err));

    const wordDoc17 = new Word({
        words: ["black cat"],
        points: 15,
        imageUrl: "https://i.imgur.com/XmOOd0R.png"
    });
    wordDoc17.save().catch(err => console.log(err));

    const wordDoc18 = new Word({
        words: ["toe bean", "toe beans"],
        points: 15,
        imageUrl: "https://i.imgur.com/MiRZVOl.png"
    });
    wordDoc18.save().catch(err => console.log(err));

    const wordDoc19 = new Word({
        words: ["solid", "van", "bicolor", "pointed", "calico", "tortoiseshell", "tabby"],
        points: 20,
        imageUrl: "https://i.imgur.com/iC1BtYz.png"
    });
    wordDoc19.save().catch(err => console.log(err));

    const wordDoc20 = new Word({
        words: ["lactose"],
        points: 20,
        imageUrl: "https://i.imgur.com/tnsPubb.png"
    });
    wordDoc20.save().catch(err => console.log(err));

    const wordDoc21 = new Word({
        words: ["casien nitrate"],
        points: 20,
        imageUrl: "https://i.imgur.com/e5sP0Gu.png"
    });
    wordDoc21.save().catch(err => console.log(err));

    const wordDoc22 = new Word({
        words: ["awakened cat"],
        points: 20,
        imageUrl: "https://i.imgur.com/BeJ2pjZ.png"
    });
    wordDoc22.save().catch(err => console.log(err));

    const wordDoc23 = new Word({
        words: ["kitty punch"],
        points: 20,
        imageUrl: "https://i.imgur.com/pogQWpV.png"
    });
    wordDoc23.save().catch(err => console.log(err));

    const wordDoc24 = new Word({
        words: ["cat treat", "cat nip", "temptations", "greenies", "kibble", "royal cat", "amf"],
        points: 20,
        imageUrl: "https://i.imgur.com/f0RGaNm.png"
    });
    wordDoc24.save().catch(err => console.log(err));

    const wordDoc25 = new Word({
        words: ["tuxedo cat"],
        points: 25,
        imageUrl: "https://i.imgur.com/gAWyCrg.png"
    });
    wordDoc25.save().catch(err => console.log(err));

    const wordDoc26 = new Word({
        words: ["grimalkin"],
        points: 30,
        imageUrl: "https://i.imgur.com/z0CeIII.png"
    });
    wordDoc26.save().catch(err => console.log(err));

    const wordDoc27 = new Word({
        words: ["bombay cat"],
        points: 30,
        imageUrl: "https://i.imgur.com/IOAF8RW.png"
    });
    wordDoc27.save().catch(err => console.log(err));

    const wordDoc28 = new Word({
        words: ["luck", "good luck", "lucky"],
        points: 30,
        imageUrl: "https://i.imgur.com/NHte2RV.png"
    });
    wordDoc28.save().catch(err => console.log(err));

    const wordDoc29 = new Word({
        words: ["고양이"],
        points: 35,
        imageUrl: "https://i.imgur.com/G8mLnZK.png"
    });
    wordDoc29.save().catch(err => console.log(err));

    const wordDoc30 = new Word({
        words: ["black cats are awesome", "black cats are lucky", "black cats are wonderful", "black cats are loved"],
        points: 50,
        imageUrl: "https://i.imgur.com/vmdYwXU.png"
    });
    wordDoc30.save().catch(err => console.log(err));*/
}