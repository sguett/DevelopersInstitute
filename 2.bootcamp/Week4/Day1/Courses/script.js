// Exercice 1

function myAge(age) {
    let MumAge = age * 2;
    let DadAge = MumAge * 1.2;
    console.log("my mum has " + MumAge);
    console.log("my dad has " + Math.round(DadAge));
}

myAge(31)


// Exercice 2

function myAge2(age) {
    let MumAge = age * 2;
    return MumAge;
}

let MumAge = myAge2(31)
console.log(`My mum is ${MumAge} years old`);