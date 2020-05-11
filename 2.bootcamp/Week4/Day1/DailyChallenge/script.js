let sentence = prompt("Give me a sentence");

function rectangularText(str) {
    let list = str.split(' ');
    let Star = '*';
    let maxlen = 0;
    for (i = 0; i < list.length; i++) {
        if (list[i].length > maxlen) {
            maxlen = list[i].length;
        }
    }
    console.log(maxlen);
    let FirstLastLine = Star.repeat(maxlen + 4);
    console.log(FirstLastLine);
    for (i = 0; i < list.length; i++) {
        if (list[i].length < (maxlen)) {
            console.log(Star + ' ' + list[i] + ' '.repeat((maxlen + 1) - list[i].length) + Star);
        } else {
            console.log(Star + ' ' + list[i] + ' ' + Star);
        }
    }
    console.log(FirstLastLine);
}

rectangularText(sentence);