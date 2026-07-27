function showTime() {
	const options = {
		timeZone: 'America/Denver',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true
	};
	const formatter = new Intl.DateTimeFormat('en-US', options);
	document.getElementById('currentTime').innerHTML = formatter.format(new Date()) + ' MST';
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
