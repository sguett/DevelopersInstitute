// Exercice 3 : Verbing
// Create a string
// If the length of this string is at least 3, it should add ‘ing’ to its end, unless it already ends in ‘ing’, in which case it should add ‘ly’ instead.
// If the string length is less than 3, it should leave it unchanged.

var var1 = "swim";

if (var1.length >= 3) {
    if (var1.slice(var1.length - 3, var1.length) == "ing") {
        var1 = var1.slice(var1.length - 3, var1.length, 'ly');
    } else {
        var1 = var1 + 'ing';
    }
    console.log(var1);
} else { console.log(var1); }

var var2 = "swimming";

if (var2.length >= 3) {
    if (var2.slice(var2.length - 3, var2.length) == "ing") {
        var2 = var2.replace(/ing/gi, "ly");
    } else {
        var2 = var2 + 'ing';
    }
    console.log(var2);
} else { console.log(var2); }

var var3 = "go";

if (var3.length >= 3) {
    if (var3.slice(var3.length - 3, var3.length) == "ing") {
        var3 = var3.replace(/ing/gi, "ly");
    } else {
        var3 = var3 + 'ing';
    }
    console.log(var3);
} else { console.log(var3); }