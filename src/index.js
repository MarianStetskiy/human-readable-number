module.exports = function toReadable(number) {
	let result = '';
	const oneToNine = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const elevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const hundred = 'hundred';
	const remDivTen = number % 10;
	const remDivHundred = number % 100;
	if (number === 0) {
		return 'zero';
	} else if (number > 0 && number < 10) {
		return result = oneToNine[number - 1];
	} else if (number > 10 && number < 20) {
		return result = elevenToNineteen[(number - 10) - 1];
	} else if (remDivTen === 0 && number < 100) {
		return result = dozens[(number / 10) - 1];
	} else if (remDivTen !== 0 && number < 100) {
		return result = dozens[((number - remDivTen) / 10) - 1] + ' ' + oneToNine[(remDivTen) - 1];
	} else if (number >= 100 && remDivHundred === 0) {
		return result = oneToNine[(number / 100) - 1] + ' ' + hundred;
	} else if (number > 100 && remDivHundred !== 0) {
		if (remDivHundred > 0 && remDivHundred < 10) {
			return result = oneToNine[((number - remDivHundred) / 100) - 1] + ' ' + hundred + ' ' + oneToNine[remDivHundred - 1];
		} else if (remDivHundred > 10 && remDivHundred < 20) {
			return result = oneToNine[((number - remDivHundred) / 100) - 1] + ' ' + hundred + ' ' + elevenToNineteen[(remDivHundred - 10) - 1];
		} else if (remDivHundred % 10 === 0) {
			return result = oneToNine[((number - remDivHundred) / 100) - 1] + ' ' + hundred + ' ' + dozens[(remDivHundred / 10) - 1];
		} else if (remDivHundred % 10 !== 0) {
			return result = oneToNine[((number - remDivHundred) / 100) - 1] + ' ' + hundred + ' ' + dozens[((remDivHundred - (remDivHundred % 10)) / 10) - 1] + ' ' + oneToNine[(remDivHundred % 10) - 1];
		}
	}
}