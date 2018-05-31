// Need emulator iso or android
// and need to add classes to html

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
	console.log(data);
	speed.textContent = data.coords.speed;
	arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
	console.err(err);
	alert('Error');
});