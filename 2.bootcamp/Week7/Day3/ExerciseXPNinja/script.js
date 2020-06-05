// Exercise 1
class Bird {
    constructor() {
        console.log("I'm a bird. 🦢"); // step 4
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸"); // step 2
        super(); // step 3
    }
}

const pet = new Flamingo(); // step 1
// output :
// I'm pink. 🌸
// I'm a bird. 🦢

// Exercise 2

function createStudent({likesJavaScript = true, likesES2015 = true}={}){
    if (likesJavaScript == true && likesES2015 == true){
        return 'The student likes JavaScript and ES2015';
    } else if (likesES2015 == false && likesJavaScript == true){
        return 'The student likes JavaScript!';
    } else if (likesJavaScript == false && likesES2015 == true){
        return 'The student likesES2015!';
    } else if (likesJavaScript == false && likesES2015 == false){
        return 'The student does not like much…';
    }
}

createStudent() // 'The student likes JavaScript and ES2015')
createStudent({likesES2015:false}) // 'The student likes JavaScript!')
createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')

// Exercise 3

let obj = { my: 'name', is: 'Rudolf', the: 'raindeer' }
let objFlat = Object.entries(obj).flat()
let objSentence = objFlat.reduce((acc, val) => acc + " " + val)
console.log(objSentence)
