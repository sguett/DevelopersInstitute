let firstWord = prompt("Give me first word");
let secondWord = prompt("Give me second word");
let thirdWord = prompt("Give me third word");

let words = {
    [firstWord]: 0,
    [secondWord]: 0,
    [thirdWord]: 0,
};

function countLettersArray(str) {
    var temp = 0;
    var maxWords = null;
    for (var i in str) {
        var arr = i.split('');
        var sorted = arr.sort();
        var str2 = sorted.join('');
        var tempArr = str2.split('');
        var count = 0;
        var nbletters = 0;
        for (var j = 0; j < tempArr.length; j++) {
            if (tempArr[j] == tempArr[j + 1]) {
                count++;
            } else if (count >= 1) {
                nbletters = nbletters + 1;
                count = 0;
            }
        }

        str[i] = nbletters;
        if (temp < nbletters) {
            temp = nbletters;
            maxWords = i;
        }
    }
    return 'The word with the greatest number of repeated letters is : ' + maxWords
        // return str;
}

console.log(countLettersArray(words));