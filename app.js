function randMessage() {
    let a = "She had some amazing news to share but nobody to share it with.";
    let b = "Dan ate the clouds like cotton candy.";
    let c = "It turns out you don't need all that stuff you insisted you did.";
    let d = "He had a vague sense that trees gave birth to dinosaurs.";
    let e = "When nobody is around, the trees gossip about the people who have walked under them.";
    let f = "The beauty of the African sunset disguised the danger lurking nearby.";
    let g = "Don't put peanut butter on the dog's nose.";
    let h = "There was no telling what thoughts would come from the machine.";
    let i = "The best key lime pie is still up for debate.";
    let j = "Please tell me you don't work in a morgue.";

    let randomNum = Math.floor(Math.random() * 10); 

    switch(randomNum) {
        case 0:
            console.log(a);
            break;
        case 1:
            console.log(b);
            break;
        case 2:
            console.log(c);
            break;
        case 3:
            console.log(d);
            break;
        case 4:
            console.log(e);
            break;
        case 5:
            console.log(f);
            break;
        case 6:
            console.log(g);
            break;
        case 7:
            console.log(h);
            break;
        case 8:
            console.log(i);
            break;
        case 9:
            console.log(j);
            break;
    }

}

randMessage();