module.exports = function toReadable(number) {
	const readableNumber = '';
	if (number > 0 && number < 10) {
		switch (number) {
			case 1: readableNumber = 'one';
			case 2: readableNumber = 'two';
			case 3: readableNumber = 'three';
			case 4: readableNumber = 'four';
			case 5: readableNumber = 'five';
			case 6: readableNumber = 'six';
			case 7: readableNumber = 'seven';
			case 8: readableNumber = 'eight';
			case 9: readableNumber = 'nine';
		}
		return readableNumber;
	} else if (number > 0 && number < 10) {
		switch (number) {
			case 10: readableNumber = 'ten';
			case 11: readableNumber = 'eleven';
			case 12: readableNumber = 'twelve';
			case 13: readableNumber = 'thirteen';
			case 14: readableNumber = 'fourteen';
			case 15: readableNumber = 'fifteen';
			case 16: readableNumber = 'sixteen';
			case 17: readableNumber = 'seventeen';
			case 18: readableNumber = 'eighteen';
			case 19: readableNumber = 'nineteen';
		}
		return readableNumber;
	}
}