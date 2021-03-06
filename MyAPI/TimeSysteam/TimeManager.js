


export function msConversion(number) {
	if (number >= 31536000000) return `${Math.floor(number / 31536000000)} year${addS(number, 'year')} and ${ms2(number % 31536000000)}`
	else if (number >= 2592000000) return `${Math.floor(number / 2592000000)} month${addS(number, 'month')} and ${ms2(number % 2592000000)}`
	else if (number >= 604800000) return `${Math.floor(number / 604800000)} week${addS(number, 'week')} and ${ms2(number % 604800000)}`
	else if (number >= 86400000) return `${Math.floor(number / 86400000)} day${addS(number, 'day')} and ${ms2(number % 86400000)}`
	else if (number >= 3600000) return `${Math.floor(number / 3600000)} hour${addS(number, 'hour')} and ${ms2(number % 3600000)}`
	else if (number >= 60000) return `${Math.floor(number / 60000)} minute${addS(number, 'minute')}`
	return 'less than a minute! Kupo!'

	function addS(number, type) {
		if (number >= 31536000000 * 2 && type === 'year') return 's'
		if (number >= 2592000000 * 2 && type === 'month') return 's'
		if (number >= 604800000 * 2 && type === 'week') return 's'
		if (number >= 86400000 * 2 && type === 'day') return 's'
		if (number >= 3600000 * 2 && type === 'hour') return 's'
		if (number >= 60000 * 2 && type === 'minute') return 's'
		return ''
	}

	function ms2(number) {
		if (number >= 31536000000) return `${Math.floor(number / 31536000000)} year${addS(number, 'year')}`
		else if (number >= 2592000000) return `${Math.floor(number / 2592000000)} month${addS(number, 'month')}`
		else if (number >= 604800000) return `${Math.floor(number / 604800000)} week${addS(number, 'week')}`
		else if (number >= 86400000) return `${Math.floor(number / 86400000)} day${addS(number, 'day')}`
		else if (number >= 3600000) return `${Math.floor(number / 3600000)} hour${addS(number, 'hour')}`
		else if (number >= 60000) return `${Math.floor(number / 60000)} minute${addS(number, 'minute')}`
		return ''
	}
}