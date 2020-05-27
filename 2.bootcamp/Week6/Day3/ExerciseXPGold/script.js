let landscape = function() {
    let result = ""; // 0 : initialize result with ""
    let flat = function(x) {
        for (let count = 0; count < x; count++) {
            result = result + "_"; // 2 : for 0 to 4 (out), we add "_" to result. So output here is "____"
        }
    }
    let mountain = function(x) {
        result = result + "/" // 4 : add "/" to result. So output here is "____/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'" // 5 : for 0 to 4 (out), we add "'" to result. So output here is "____/''''"
        }
        result = result + "\\" // 6 : add "\" to result. So output here is "____/''''\"
    }

    flat(4); // 1 : call function flat with arg = 4
    mountain(4); // 3 : call function mountain with arg = 4
    flat(4) // 7 : call function flat with arg = 4. Same comments as 2, but output here is "____/''''\____"
    return result; // 8 : finally, return result "____/''''\____"
}

// ____/''''\____