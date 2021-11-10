module.exports = function toReadable (number) {
    let arrOfUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrOfTens1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrOfTens2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrOfHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    let template = '';

        if (number == 0) {
            return "zero";
        } if (number >= 100 && number <= 999) {
            let threeDigits = `${number}`.split('')[0];
            template = arrOfHundreds[threeDigits - 1] + ' ';
            number = number - threeDigits * 100;
        } if (number > 0 && number <= 9) {
            return template + arrOfUnits[number];
        } else if (number >= 10 && number < 20) {
            return template + arrOfTens1[number - 10];
        } else if (number >= 20 && number <= 99) {
            let twoDigits = `${number}`.split('');
            return `${template}${arrOfTens2[twoDigits[0] - 2]} ${arrOfUnits[twoDigits[1]]}`.trim();
        }

    return template.trim();
}
