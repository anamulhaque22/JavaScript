function reverseText(text) {
    var reverseSentense = text.toLowerCase().split('').reverse().join('').split(' ');
    reverseSentense = reverseSentense.map((reverseWord) => {
        return reverseWord[0].toUpperCase() + reverseWord.substring(1);
    }).reverse().join(" ");
    return reverseSentense;
}
var input = "I Love Bangladesh";
var result = reverseText(input);
console.log(result);