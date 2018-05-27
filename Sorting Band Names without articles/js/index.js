const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce The Veil', 'Norma Jean',
	'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romas', 'Counterparts',
	'Oh Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBand = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBand.map(band =>
	`<li>${band}</li>`).join('');


console.log(sortedBand);