module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    let result = "";

    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) result += " ";
    }

    if (number >= 10 && number <= 19) {
        if (number === 10) {
            result += tens[0];
        } else {
            result += teens[number - 11];
        }
        return result;
    } else if (number >= 20) {
        result += tens[Math.floor(number / 10) - 1];
        number %= 10;
        if (number > 0) result += " ";
    }

    if (number > 0 && number < 10) {
        result += ones[number];
    }

    return result;
};
