var firstWord = "Mary";
var secondWord = "Frmy";

isAnagram(firstWord, secondWord);

function isAnagram(first, second) {
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log(isAnagram(firstWord, secondWord));
